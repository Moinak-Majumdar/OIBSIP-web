'use client'

import { useState } from 'react'
import Button from "@/components/calculator/Button"

enum ElementType { digit, operator, braces, decimalPoint }

function getElementType(val: string): ElementType {
    if (val == '+' || val == '-' || val == '*' || val == '/') {
        return ElementType.operator;
    }
    if (val == '(' || val == ')') {
        return ElementType.braces;
    }
    if (val == '.') {
        return ElementType.decimalPoint;
    }
    return ElementType.digit;
}

const Calculator = () => {
    const [equation, setEquation] = useState<string>('');
    const [output, setOutput] = useState<string>('');
    const [noOfOpeningBraces, setNoOfOpeningBraces] = useState<number>(0);

    function getLastElementOfEquation(): string {
        if (equation.length == 0) {
            return '';
        }
        const end = equation[equation.length - 1];
        if (end == ' ') {
            return equation[equation.length - 2];
        }
        return end;
    }

    function deleteLastElement() {
        if (equation != '') {
            const end = equation[equation.length - 1];
            if (end == ' ') {
                const end3 = equation.slice(equation.length - 3, equation.length);
                if (end3.includes(')')) {
                    setNoOfOpeningBraces(noOfOpeningBraces + 1);
                }
                if (end3.includes('(')) {
                    setNoOfOpeningBraces(noOfOpeningBraces - 1);
                }
                setEquation(equation.slice(0, equation.length - 3));
            } else {
                if (end.includes(')')) {
                    setNoOfOpeningBraces(noOfOpeningBraces + 1);
                }
                if (end.includes('(')) {
                    setNoOfOpeningBraces(noOfOpeningBraces - 1);
                }
                setEquation(equation.slice(0, equation.length - 1));
            }
        }
    }

    function addDigits(digit: string) {
        const last = getLastElementOfEquation();
        if (last == ')') {
            setEquation(`${equation} * ${digit}`);
            return;
        }
        setEquation(`${equation}${digit}`);
    }

    function addOperator(operator: string) {
        if (equation == '') {
            return;
        }
        const last = getLastElementOfEquation();
        const lastType = getElementType(last);

        if (lastType == ElementType.digit) {
            setEquation(`${equation} ${operator} `);
            return;
        }

        if (lastType == ElementType.operator) {
            deleteLastElement();
            setEquation(`${equation} ${operator} `);
            return;
        }

        if (last == '(' && operator == '-') {
            setEquation(`${equation} ${operator} `);
        }
        if (last == ')') {
            setEquation(`${equation} ${operator} `);
        }
    }

    function manageBraces(braces: string) {
        if (equation == '') {
            return;
        }
        const last = getLastElementOfEquation();
        const lastType = getElementType(last);

        if (braces == '(') {
            setNoOfOpeningBraces(noOfOpeningBraces + 1);
            if (lastType == ElementType.digit || last == ')') {
                setEquation(`${equation} * (`);
                return;
            }
            if (lastType == ElementType.decimalPoint) {
                setEquation(`${equation}0 * (`);
                return;
            }

            setEquation(`${equation} ( `);
        }

        if (braces == ')') {
            if (last == '(' || lastType == ElementType.operator) {
                return;
            }
            if (noOfOpeningBraces > 0) {
                setNoOfOpeningBraces(noOfOpeningBraces - 1);
                if (lastType == ElementType.decimalPoint) {
                    setEquation(`${equation}0 )`);
                    return;
                }
                setEquation(`${equation})`);
            }
        }
    }

    function manageDecimalPoint() {
        if (equation == '') {
            setEquation('0.');
            return;
        }
        const last = getLastElementOfEquation();
        const lastType = getElementType(last);
        const elm = equation.split(' ');

        if (lastType == ElementType.decimalPoint ||
            elm.slice(-1).includes('.') ||
            last == ')') {
            return;
        }
        if (lastType == ElementType.operator || last == '(') {
            setEquation(`${equation} 0.`);
            return;
        }
        setEquation(`${equation}.`)
    }

    function clear() {
        if (equation != '') {
            setEquation('');
            setOutput('');
        }
    }

    function solve() {
        try {
            setOutput(eval(equation))
        } catch (error) {
            alert(error);
        }
    }




    return (
        <section className='flex justify-center items-center h-screen p-12 bg-gradient-to-b from-blue-300 to-blue-400'>
            <div className="flex flex-col justify-start items-center p-4 md:p-6 bg-slate-50 rounded-2xl shadow-2xl">
                <div className="px-6 py-4 bg-blue-200 flex flex-col w-full min-h-[8rem] rounded-xl shadow-2xl shadow-slate-200">
                    {/* hl1 equation */}
                    <p className="text-blue-500 text-xl font-semibold">{equation}</p>
                    {/* hl2 answer */}
                    <p className="text-3xl font-semibold mt-auto ml-auto text-gray-700">{output}</p>
                </div>
                <div className="mt-6 grid grid-cols-4 gap-2">
                    <Button label="C" withBg={true} onTap={clear} />
                    <Button label="(" withBg={true} onTap={() => manageBraces('(')} />
                    <Button label=")" withBg={true} onTap={() => manageBraces(')')} />
                    <Button label="/" withBg={true} onTap={() => addOperator('/')} />
                    <Button label="7" withBg={false} onTap={() => addDigits('7')} />
                    <Button label="8" withBg={false} onTap={() => addDigits('8')} />
                    <Button label="9" withBg={false} onTap={() => addDigits('9')} />
                    <Button label="*" withBg={true} onTap={() => addOperator('*')} />
                    <Button label="4" withBg={false} onTap={() => addDigits('4')} />
                    <Button label="5" withBg={false} onTap={() => addDigits('5')} />
                    <Button label="6" withBg={false} onTap={() => addDigits('6')} />
                    <Button label="+" withBg={true} onTap={() => addOperator('+')} />
                    <Button label="1" withBg={false} onTap={() => addDigits('1')} />
                    <Button label="2" withBg={false} onTap={() => addDigits('2')} />
                    <Button label="3" withBg={false} onTap={() => addDigits('3')} />
                    <Button label="-" withBg={true} onTap={() => addOperator('-')} />
                    <Button label="." withBg={false} onTap={manageDecimalPoint} />
                    <Button label="0" withBg={false} onTap={() => addDigits('0')} />
                    <Button label="Del" withBg={true} onTap={deleteLastElement} />
                    <Button label="=" withBg={true} onTap={solve} />
                </div>
            </div>
        </section>
    )
}

export default Calculator