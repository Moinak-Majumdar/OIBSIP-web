'use client'

import Image from "next/image"
import bg from '@/assets/background2.svg';
import { IoMdCloseCircle, IoMdAddCircle } from "react-icons/io";
import { MdDoneAll, MdRemoveDone, MdDelete, MdDoneOutline } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Lato } from 'next/font/google'
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
import { FormEvent, useEffect, useRef, useState } from 'react'

function formattedTime(): string {
    const d = new Date();
    const date = d.toLocaleDateString();
    const t = d.toLocaleTimeString().split(':');
    const time = `${t[0]}:${t[1]} ${parseInt(t[0]) < 12 ? 'AM' : 'PM'}, ${date}`;
    return time;
}

interface TodoItem { title: string, message: string, status: boolean, doa: string, doneAt: string }

function getStorage(): TodoItem[] {
    const storage = localStorage.getItem('todoList');
    if (storage != null) {
        const temp = JSON.parse(storage);
        const todoList: TodoItem[] = [...temp];
        return todoList;
    }
    return [];
}

const Todo = () => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const todoTitleRef = useRef<HTMLInputElement>(null);
    const todoMessageRef = useRef<HTMLTextAreaElement>(null);

    const [todoList, setTodoList] = useState<TodoItem[]>([]);

    useEffect(() => {
        const list = getStorage()
        setTodoList(list);
    }, [])



    function addTodo(e: FormEvent) {
        e.preventDefault();
        const item: TodoItem = { title: todoTitleRef.current!.value, message: todoMessageRef.current!.value, doa: formattedTime(), doneAt: "", status: false };
        const temp = [...todoList];
        temp.push(item)
        setTodoList(temp);
        localStorage.setItem('todoList', JSON.stringify(temp));
        todoTitleRef.current!.value = '';
        todoMessageRef.current!.value = '';
        modalRef.current?.close();
    }

    function toggleDone(time: string) {
        const items: TodoItem[] = [];
        todoList.forEach((elm) => {
            if (elm.doa == time) {
                elm.status = !elm.status;
                if (elm.status) {
                    elm.doneAt = formattedTime();
                }
            }
            items.push(elm);
        })
        setTodoList([...items])
        localStorage.setItem('todoList', JSON.stringify([...items]));
    }

    function deleteTodo(item: TodoItem) {
        const ack = confirm(`Do you want to delete: ${item.title}?`);

        if (ack) {
            const items = todoList.filter((elm) => { return elm.doa != item.doa });
            setTodoList([...items]);
            localStorage.setItem('todoList', JSON.stringify([...items]));
        }
    }

    return (
        <main>
            <div className="z-20 fixed top-0 py-4 px-4 md:px-10 lg:px-16 xl:px-36 2xl:px-44 flex justify-between items-center bg-white/50 w-full backdrop-blur">
                <h2 className="ml-4 text-xl sm:text-2xl font-semibold text-indigo-600 animate-pulse">Your ToDo</h2>
                <button onClick={() => modalRef.current?.showModal()} className="bg-indigo-100 outline-none px-2 py-1 rounded-full border-2 border-indigo-500 text-base sm:text-lg font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 transition ease-in-out duration-500 shadow-xl shadow-slate-200 flex gap-1 justify-center mr-8">
                    <IoMdAddCircle className="text-xl sm:text-2xl my-auto" />   Add
                </button>

            </div>
            <section className="box py-10 z-10 " style={lato.style}>
                <dialog ref={modalRef} className="m-auto rounded-md p-4 lg:p-6 bg-white shadow-2xl shadow-slate-800">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-semibold text-indigo-600">Add ToDo</h2>
                        <button onClick={() => modalRef.current?.close()} className="text-lg bg-slate-800 rounded-full px-2 text-indigo-200 flex items-center gap-1">
                            <IoMdCloseCircle className="text-xl" />
                            close
                        </button>
                    </div>
                    <form className="mt-4" onSubmit={addTodo}>
                        <label htmlFor="title" className="leading-7 text-sm text-slate-600">Title</label>
                        <input ref={todoTitleRef} required name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-indigo-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <label htmlFor="message" className="leading-7 text-sm text-slate-600">Message</label>
                        <textarea ref={todoMessageRef} required name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md text-lg mt-4 w-full">submit</button>
                    </form>
                </dialog>
                <div className="mt-8 flex flex-col">
                    {!todoList.length && <h4 className="m-auto pt-20 animate-bounce text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r via-cyan-400 from-blue-600 to-indigo-600">No ToDos left, Try adding some.</h4>}
                    {todoList.map((elm, i) => {
                        return <div key={`item_${i}`} className={`w-full p-4 rounded-md border-l-[6px] border mt-4 ${elm.status ? 'bg-green-100 border-green-500' : 'bg-blue-50 border-blue-100'}`}>
                            <div className="flex justify-between">
                                <h5 className="text-xl md:text-2xl mb-2 text-indigo-700">{elm.title}</h5>
                                <div>
                                    {elm.status ? <button title="undone" onClick={() => { toggleDone(elm.doa) }}><MdRemoveDone className="rounded-full p-1 text-3xl bg-slate-100 text-slate-800 border-2 border-green-200 cursor-pointer" /></button> : <button title="mark as done" onClick={() => toggleDone(elm.doa)}>
                                        <MdDoneAll className="rounded-full p-1 text-3xl bg-slate-100 text-slate-800 border-2 border-blue-100 cursor-pointer" />
                                    </button>}
                                    <button title="delete" onClick={() => deleteTodo(elm)} >
                                        <MdDelete className="ml-2 rounded-full p-1 text-3xl bg-red-100 border-2 border-red-200 text-pink-600 cursor-pointer" />
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm md:text-base text-slate-800">{elm.message}</p>
                            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                                <div className=" bg-blue-200 border w-fit px-2 py-1 rounded-full flex gap-2 text-xs justify-center text-slate-500 border-blue-300">
                                    <FaPen className="my-auto text-sm " />
                                    <span>{elm.doa}</span>
                                </div>
                                {elm.status && <div className=" bg-green-600 border w-fit px-2 py-1 rounded-full flex gap-2 text-xs justify-center text-slate-100">
                                    <MdDoneOutline className="my-auto text-sm text-green-50" />
                                    <span>{elm.doneAt}</span>
                                </div>}
                            </div>
                        </div>
                    })}
                </div>
            </section >
            <div className="-z-10 opacity-80 md:opacity-50 fixed bottom-0 lg:-bottom-48 right-0">
                <Image src={bg} alt="background" width={window.screen.width} loading="eager" priority={true} />
            </div>
        </main>
    )
}

export default Todo