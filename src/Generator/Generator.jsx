import React, { useState } from "react";
import PdfComponent from "./PdfComponent/PdfComponent";
import cls from "./Generator.module.scss";
const Generator = () => {
    const [userName, setUserName] = useState('');
    const [userAdress, setUserAdress] = useState('');
    const [userDataDoc, setDataDoc] = useState('');
    const [userMonateString, setMonatString] = useState('');
    const [userMonate, setMonat] = useState('');
    const [userYear, setYear] = useState('');
    const [nummerPdf, setNummerPdf] = useState('');
    const [userNummerKonto, setNummerKonto] = useState('');
    const [userDoElektro, setDoElektro] = useState('5551');
    const [userAfterElektro, setAfterElektro] = useState('5721');
    const [userNummerRehnung, setNummerRehnung] = useState('854125621');
    const [userEIC, setEIC] = useState('56XM18F75332915J');
    const [spozhitoGazy, setSpozhitoGazy] = useState('30');


    const handleInputChangeName = (event) => {
        setUserName(event.target.value);
    };
    const handleInputChangeAdress = (event) => {
        setUserAdress(event.target.value);
    };
    const handleInputDataDoc = (event) => {
        setDataDoc(event.target.value);
    };

    const handleInputMonate = (event) => {
        const selectedText = event.target.options[event.target.selectedIndex].text;
        setMonatString(selectedText);
        setMonat(event.target.value);
    };

    const handleInputYear = (event) => {
        setYear(event.target.value);
    };
    const handleInputNummerPdf = (event) => {
        setNummerPdf(event.target.value)
    }

    const handleInputChangeNummerKonto = (event) => {
        setNummerKonto(event.target.value)
    }
    const handleInputChangeDoElektro = (event) => {
        setDoElektro(event.target.value)


    }
    const handleInputChangeAfterElektro = (event) => {
        setAfterElektro(event.target.value)

    }
    const handleInputChangeNummerRehnung = (event) => {
        setNummerRehnung(event.target.value)

    }
    const handleInputChangeEIC = (event) => {
        setEIC(event.target.value)

    }
    const handleInputSpozhitoGazy = (event) => {
        setSpozhitoGazy(event.target.value)

    }







    return (
        <div className={cls.all}>

            <div className={cls.formContainer}>

                <div className={cls.inputContainer}>
                    <select
                        name="options"
                        value={nummerPdf}
                        onChange={handleInputNummerPdf}
                    >
                        <option value="">Вибери макет ПДФ</option>
                        <option value="1">ГАЗМЕРЕЖІ Вінницька Філія</option>
                        <option value="2">НафтоГаз</option>
                        <option value="3">Київська обласна ЕК</option>
                    </select>
                    <label htmlFor="options">Вибери макет ПДФ</label>
                </div>

                {nummerPdf && <div className={cls.inputContainer}>
                    <input type="text" name="nummerKonto"
                        value={userNummerKonto}
                        onChange={handleInputChangeNummerKonto}
                    />
                    <label htmlFor="nummerKonto">Введи номер особового рахунку рахунку {(nummerPdf === "1" && '10 цифр')
                        ||
                        ((nummerPdf === "2" || nummerPdf === "3") && '9 цифр')}</label>
                </div>}
                {nummerPdf &&<div className={cls.inputContainer}>
                    <input type="text" name="EIC"
                        value={userEIC}
                        onChange={handleInputChangeEIC}
                    />
                    <label htmlFor="EIC">Введи номер EIC (56XM18F75332915J)</label>
                </div>}

                {nummerPdf && <div className={cls.inputContainer}>
                    <input type="text"
                        name="fio"
                        value={userName}
                        onChange={handleInputChangeName}
                    />
                    <label htmlFor="fio">Введи ПІБ так як на зразку {((nummerPdf === "1" || nummerPdf === "3") && '(Шевченко Тарас Григорович)')
                        ||
                        (nummerPdf === "2" && '(Шевченко T.Г.)')}</label>
                </div>}
                {nummerPdf && <div className={cls.inputContainer}>
                    <input type="text" name="adress"
                        value={userAdress}
                        onChange={handleInputChangeAdress}
                    />
                    <label htmlFor="adress">Введи адресу (Вул. Желябова, буд. 2, м. Київ, 03052)</label>
                </div>}
                {((nummerPdf == 1) || (nummerPdf == 2)) &&
                    <div className={cls.inputContainer}>
                        <input type="text" name="data"
                            value={userDataDoc}
                            onChange={handleInputDataDoc}
                        />
                        <label htmlFor="data">Введи дату коли сформувався документ (дд.мм.рррр)</label>
                    </div>
                }


                {(nummerPdf == 3) && (
                    <div className={cls.pdf3Inputs}>
                        <div className={cls.inputContainer}>
                            <input type="number" name="doElektro"
                                value={userDoElektro}
                                onChange={handleInputChangeDoElektro}
                            />
                            <label htmlFor="doElektro">Кіловат на початку місяця (5551)</label>
                        </div>
                        <div className={cls.inputContainer}>
                            <input type="number" name="AfterElektro"
                                value={userAfterElektro}
                                onChange={handleInputChangeAfterElektro}
                            />
                            <label htmlFor="AfterElektro">Кіловат на кінець місяця (5721)</label>
                        </div>
                        <div className={cls.inputContainer}>
                            <input type="number" name="NummElektroRehnung"
                                value={userNummerRehnung}
                                onChange={handleInputChangeNummerRehnung}
                            />
                            <label htmlFor="NummElektroRehnung">Номер рахунку за електроенергію (9 цифр)</label>
                        </div>
                    </div>)
                }
                {((nummerPdf == 1) || (nummerPdf == 2)) &&
                    <div className={cls.inputContainer}>
                        <input type="number" name="SpozhitoGazy"
                            value={spozhitoGazy}
                            onChange={handleInputSpozhitoGazy}
                        />
                        <label htmlFor="SpozhitoGazy">Cпожито газу (от 30 до 200)</label>
                    </div>
                }
                {nummerPdf && <div className={cls.inputContainer}>
                    <select
                        name="options"
                        value={userMonate}
                        onChange={handleInputMonate}
                    >
                        <option value="">Вибери Місяць</option>
                        <option value="01">Січень</option>
                        <option value="02">Лютий</option>
                        <option value="03">Березень</option>
                        <option value="04">Квітень</option>
                        <option value="05">Травень</option>
                        <option value="06">Червень</option>
                        <option value="07">Липень</option>
                        <option value="08">Серпень</option>
                        <option value="09">Вересень</option>
                        <option value="10">Жовтень</option>
                        <option value="11">Листопад</option>
                        <option value="12">Грудень</option>
                    </select>
                    <label htmlFor="options">Вибери місяць за який нараховано комуналку</label>
                </div>}
                {nummerPdf && <div className={cls.inputContainer}>
                    <select
                        name="options"
                        value={userYear}
                        onChange={handleInputYear}
                    >
                        <option value="">Вибери Рік</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                    <label htmlFor="options">Вибери рік за який нараховано комуналку</label>
                </div>}

            </div>
            <PdfComponent userMonateString={userMonateString}
                userName={userName}
                userAdress={userAdress}
                userDataDoc={userDataDoc}
                userMonate={userMonate}
                userYear={userYear}
                nummerPdf={nummerPdf}
                userNummerKonto={userNummerKonto}
                userAfterElektro={userAfterElektro}
                userDoElektro={userDoElektro}
                userNummerRehnung={userNummerRehnung}
                userEIC={userEIC}
                spozhitoGazy={spozhitoGazy} />
        </div>
    )
}


export default Generator;