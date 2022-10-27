import React, { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Join Sparta Coding CLub",
            body: "Learn React.js & Node.js",
            isDone: false,
        },
        {
            id: 2,
            title: "Study Hard",
            body: "Success is closer!",
            isDone: true,
        },
    ]);

    return (
        <Layout>
            <Header />
            <Form setTodos={setTodos} todos={todos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    );
};

export default TodoList;