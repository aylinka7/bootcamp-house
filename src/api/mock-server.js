import { createServer, Model, RestSerializer, Response } from "miragejs";

export const mockServer = () => {
    createServer({
        serializers: {
            application: RestSerializer
        },

        models: {
            account: Model
        },

        routes() {
            this.timing = 2000;

            this.post("/api/account/:username/authenticate", (schema, request) => {
                const username = request.params.username;
                const { password } = JSON.parse(request.requestBody);
                if (!schema.accounts.findBy({ username, password }))
                    return new Response(
                        401,
                        {},
                        {
                            errors: ["Invalid username or password"]
                        }
                    );
                return new Response(200);
            });
        },

        seeds(server) {
            server.create("account", {
                username: "Q169410",
                password: "foobar"
            });
            server.create("account", {
                username: "Q123456",
                password: "barfoo"
            });
        }
    });
};