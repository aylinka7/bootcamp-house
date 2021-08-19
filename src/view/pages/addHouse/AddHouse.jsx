import { useForm } from "react-hook-form";
import css from "./add_house.module.css"

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
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
            <input
                {...register("location", { required: "Name is required" })}
                placeholder="Расположение"
            />
            {errors.name && (
                <span style={{ color: "crimson" }}> {errors.name.message} </span>
            )}
            <input
                {...register("img", { required: true })}
                placeholder="Фото"
            />
            <input
                {...register("description", { required: true })}
                placeholder="Имя"
            />
            <input
                {...register("star", { required: true })}
                placeholder="1/5"
            />
            <input
                {...register("price", { required: true })}
                placeholder="Цена"
            />
            <input
                {...register("total", { required: true })}
                placeholder="Всего"
            />
            <input
                {...register("title", { required: true })}
                placeholder="Описание"
            />

            <input className={css.sub} type="submit" />
        </form>
    );
}

export default AddHouse