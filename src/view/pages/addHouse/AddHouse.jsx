import { useForm } from "react-hook-form";

function AddHouse({ refreshUsers }) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        fetch("https://60f1235338ecdf0017b0fa5e.mockapi.io/card", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...data, createdAt: new Date().toISOString() })
        })
            .then((res) => res.json())
            .then((res) => refreshUsers());
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("location", { required: "Name is required" })}
                placeholder="расположение"
            />
            {errors.name && (
                <span style={{ color: "crimson" }}> {errors.name.message} </span>
            )}
            <input
                {...register("img", { required: true })}
                placeholder="фото"
            />
            <input
                {...register("description", { required: true })}
                placeholder="имя"
            />
            <input
                {...register("star", { required: true })}
                placeholder="1/5"
            />
            <input
                {...register("price", { required: true })}
                placeholder="цена"
            />
            <input
                {...register("total", { required: true })}
                placeholder="всего"
            />
            <input
                {...register("title", { required: true })}
                placeholder="Описание"
            />

            <input type="submit" />
        </form>
    );
}

export default AddHouse