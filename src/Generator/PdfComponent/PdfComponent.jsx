import React from "react";
import html2pdf from "html2pdf.js";
import cls from "./PdfComponent.module.scss";
import Logo from "../../logo.png"
import pdf2Botton from "../../../src/assets/img/naftogaz/naftoGazBotton.png"
import pdf2Right from "../../../src/assets/img/naftogaz/naftoGazLeft.png"
import cls2 from "./PdfComponent2.module.scss"
import cls3 from "./PdfComponent3.module.scss"
import EKBot from "../../../src/assets/img/KyivOblEK/EKBot.png"
import EKItem from "../../../src/assets/img/KyivOblEK/EKItem.png"
import EKQR from "../../../src/assets/img/KyivOblEK/EKQR.png"
import EKTop from "../../../src/assets/img/KyivOblEK/EKTop.png"

class PdfComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            previewURL: "",
        };
        this.pdfRef = React.createRef();
    }

    handleContentChange = (event) => {
        this.setState({ content: event.target.value });
    };

    generatePDF = () => {
        const content = this.pdfRef.current;

        html2pdf(content, {
            margin: 10,
            filename: "generated.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        }).then((pdf) => {
            const previewURL = pdf.output("datauristring");
            this.setState({ previewURL });
        });
    };

    render() {
        if (this.props.nummerPdf === "1") {
            const doSplaty = (this.props.spozhitoGazy * 5.096).toFixed(2)
            return (

                <div>


                    <div ref={this.pdfRef}>
                        {/* {this.state.content}
          <img src={Logo} alt="aa" />
          <div>asdsadasd</div> */}
                        <div className={cls.pdfContainer}>
                            <div className={cls.pdfLeft}>
                                <div className={cls.pdfLeftLogo}>
                                    <img src={Logo} alt="logo" />
                                </div>
                                <div className={cls.pdfLeftDescribeLogo}>
                                    <p>ВінницькафіліяТОВ«ГАЗОРОЗПОДІЛЬНІМЕРЕЖІ УКРАЇНИ»</p>
                                    <p>ЄДРПОУ 45165321 UA553020760000026032301473821</p>
                                    <p>вАТ«Ощадбанк»МФО302076</p>
                                </div>
                                <div className={cls.pdfLeftMonate}>за {this.props.userMonateString} {this.props.userYear} року</div>
                                <div className={cls.pdfLeftTable1}>
                                    <div className={cls.pdfLeftTable1Tittle}>Особовий рахунок</div>
                                    <div className={cls.pdfLeftTable1Nummer}>{this.props.userNummerKonto}</div>
                                </div>
                                <div className={cls.pdfLeftUserName}>{this.props.userName}</div>
                                <div className={cls.pdfLeftUserAdress}> {this.props.userAdress} </div>
                                <div className={cls.pdfLeftUserPay}> <div></div> СПЛАТИТИ </div>
                                <div className={cls.pdfLeftUserTable2}>
                                    <div>Сплачую, грн.</div>
                                    <div></div>
                                    <div>Показник лічильника<br />
                                        станом на "   " {this.props.userYear}р.
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                            <div className={cls.pdfRight}>
                                <div className={cls.pdfRightHeader}>
                                    <div className={cls.pdfRightHeaderLeft}>
                                        <h2>https://vn.grmu.com.ua/</h2>
                                        <p>м. Козятин, вул.Героїв Майдану, 33/4</p>
                                        <p>+38(098)300-2-888,+38(066)300-2-888,</p>
                                        <p>+38(093)300-2-888</p>
                                    </div>
                                    <div className={cls.pdfRightHeaderRight}>
                                        <p>Не накопичуйте борги, сплатіть, будьласка, до 20 числа. </p>
                                        <p>Заощаджуйте на банківській комісії, сплачуючи одразу за кількамісяців.</p>
                                    </div>
                                </div>
                                <div className={cls.pdfRight2Level}>
                                    <p>РАХУНОК ЗА ПОСЛУГИ З РОЗПОДІЛУ ГАЗУ ЗА {this.props.userMonateString} {this.props.userYear}</p>
                                    <p>сформовано {this.props.userDataDoc}</p>
                                </div>
                                <div className={cls.pdfRight3Level}>
                                    <div>ЕІСкод</div>
                                    <div>{this.props.userEIC}</div>
                                    <div>Зареєстровано осіб</div>
                                    <div>3</div>
                                    <div>Група споживання</div>
                                    <div>15</div>
                                </div>
                                <div className={cls.pdfRight4Level}>НАРАХОВАНО ЗА {this.props.userMonateString} {this.props.userYear}</div>
                                <div className={cls.pdfRight5Level}>
                                    <div>Переплата станом на 01.{this.props.userMonate}.{this.props.userYear}</div>
                                    <div>Обсяг замовленої потужності замісяць (куб.м) </div>
                                    <div>Тариф,(грн. за 1 куб.м) зПДВ</div>
                                    <div>Вартість, (грн.) зПДВ</div>
                                    <div>Переплата за {this.props.userMonateString} {this.props.userYear} (грн. з ПДВ)</div>
                                    <div>0</div>
                                    <div>{this.props.spozhitoGazy}</div>
                                    <div>5,096</div>
                                    <div>{doSplaty}</div>
                                    <div>0</div>
                                    <div>Показник на 01.{this.props.userMonate}.{this.props.userYear}</div>
                                    <div>Показник на 30.{this.props.userMonate}.{this.props.userYear}</div>
                                    <div>Спожито за {this.props.userMonateString} {this.props.userYear}</div>
                                    <div>Спожито за {this.props.userMonateString} {Math.ceil(this.props.userYear - 1)}</div>
                                    <div>37200<br />GASUA</div>
                                    <div>37228<br />Контакт-центр</div>
                                    <div>28 куб.м / 296,33 кВт*год/<br />0,2548 Гкал / 1066,78 Мдж</div>
                                    <div>0 мДж</div>
                                </div>
                                <div className={cls.pdfRight6Level}>Відповідно до вимог кодексу ГРМ р.VI гл.6, р.IX гл.4, р.XI гл.3. фактичний обсяг споживання за газовий рік (01.{this.props.userMonate}.{Math.ceil(this.props.userYear - 1)}-30.{this.props.userMonate}.{this.props.userYear}) склав 1344,00 куб.м. Зазначений обсяг буде використаний для визначення розміру величини річної замовленої потужності на 2024 рік</div>
                                <div className={cls.pdfRight7Level}>
                                    <div>Річна замовлена потужність {this.props.userYear}</div>
                                    <div>1596,09 куб.м</div>
                                    <div>Місячна замовлена потужність {this.props.userYear}</div>
                                    <div>133,01 куб.м</div>
                                    <div>Річна замовлена потужність 2024</div>
                                    <div>1344,00 куб.м</div>
                                    <div>Місячна замовлена потужність 2024</div>
                                    <div> 112,00 куб.м</div>
                                </div>
                                <div className={cls.pdfRightBotton}>Середньозважена вища теплота згоряння н амаршруті ФХП №С1 (Самгородок) ГРС Перемога за {this.props.userMonateString} {this.props.userYear} 10,69 кВт*год/куб.м</div>
                            </div>
                        </div>
                    </div>
                    {this.state.previewURL && (
                        <iframe
                            title="PDF Preview"
                            width="100%"
                            height="500px"
                            src={this.state.previewURL}
                        ></iframe>
                    )}
                    <button onClick={this.generatePDF} className={cls.button}>generate pdf</button>
                </div>
            );
        }
        else if (this.props.nummerPdf === "2") {
            const doSplaty = (this.props.spozhitoGazy * 7.8773211).toFixed(2)
            const borg = (doSplaty - 23.23).toFixed(2)
            return (
                <div>
                    <div ref={this.pdfRef}>
                        <div className={cls2.pdf2Container}>
                            <div className={cls2.pdf2Top}>
                                <div className={cls2.pdf2TopLeft}>
                                    <div className={cls2.pdf2InfoHeader1}>Рахунок за спожитий газ</div>
                                    <div className={cls2.pdf2InfoHeader2}>
                                        <p>{this.props.userMonateString} {this.props.userYear}</p>
                                        <p>сформовано {this.props.userDataDoc}</p>
                                    </div>
                                    <div className={cls2.pdf2infoLine}></div>
                                    <div className={cls2.pdf2infoLeft}>
                                        <div className={cls2.pdf2infoLeftName}>{this.props.userName}</div>
                                        <div className={cls2.pdf2infoLeftAdress}>{this.props.userAdress}</div>
                                        <div className={cls2.pdf2infoLeftPersonalNummer}>
                                            <div>
                                                <p>Особовий рахунок</p>
                                                <p>{this.props.userNummerKonto}</p>
                                            </div>
                                            <div>
                                                <p>EIC код</p>
                                                <p>{this.props.userEIC}</p>
                                            </div>
                                        </div>
                                        <div className={cls2.pdf2infoLeftBotton}>
                                            Обов’язково вкажіть номер особового рахунку
                                            при оплаті в касах банку або через Інтернет.
                                            Сплачені рахунки необхідно зберігати 3 роки.
                                        </div>
                                    </div>
                                    <div className={cls2.pdf2InfoRight}>
                                        <div className={`${cls2.pdf2InfoRightItem} ${cls2.pdf2InfoRightItemLine}`}>
                                            <p>Спожито, м3 </p>
                                            <p>{this.props.spozhitoGazy}</p>
                                        </div>
                                        <div className={cls2.pdf2InfoRightDescription}>
                                            Об`єм газу, визначений вашим оператором ГРМ.
                                        </div>
                                        <div className={`${cls2.pdf2InfoRightItem} ${cls2.pdf2InfoRightItemLine}`}>
                                            <p>Тарифний план</p>
                                            <p>«Фіксований»</p>
                                        </div>
                                        <div className={cls2.pdf2InfoRightItem}>
                                            <p>Тариф, грн/м3 </p>
                                            <p>7.8773211</p>
                                        </div>
                                        <div className={`${cls2.pdf2InfoRightItem} ${cls2.pdf2InfoRightItemBackground}`}>
                                            <p>Нараховано, грн</p>
                                            <p>{doSplaty}</p>
                                        </div>
                                        <div className={`${cls2.pdf2InfoRightItem} ${cls2.pdf2InfoRightItemLine}`}>
                                            <p>Борг, грн</p>
                                            <p>{borg}</p>
                                        </div>
                                        <div className={`${cls2.pdf2InfoRightItem} ${cls2.pdf2InfoRightItemLine}`}>
                                            <p>Сплачено, грн </p>
                                            <p>{borg}</p>
                                        </div>
                                        <div className={cls2.pdf2InfoRightDescription}>
                                            Станом на 31.10.2023, не враховано оплати, проведені після
                                        </div>
                                        <div className={`${cls2.pdf2InfoRightItem} ${cls2.pdf2InfoRightItemLine}`}>
                                            <p>Пеня, грн </p>
                                            <p>0.00</p>
                                        </div>
                                        <div className={cls2.pdf2InfoRightDescription}>
                                            Нараховується в розмірі 0,01% від суми простроченого
                                            платежу за кожен день прострочення.
                                        </div>
                                        <div className={cls2.pdf2InfoRightSumm}>
                                            <p>До сплати, грн</p>
                                            <p>{doSplaty}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className={cls2.pdf2TopRight}>
                                    <img src={pdf2Right} alt="pdf2Right" />
                                </div>
                            </div>
                            <div className={cls2.pdf2Botton}>
                                <img src={pdf2Botton} alt="pdf2Bot" />
                            </div>
                        </div>
                    </div>
                    <button onClick={this.generatePDF} className={cls.button}>generate pdf</button>
                </div>
            )
        }
        else if (this.props.nummerPdf === "3") {
            const summElektro =  ((Number(this.props.userAfterElektro) - Number(this.props.userDoElektro)) * 2.62).toFixed(2)
            const summPDF =  ((summElektro * 20) / 100).toFixed(2)
            const summKW =  Number(this.props.userAfterElektro) - Number(this.props.userDoElektro)
            const bezPDV = summElektro - summPDF
            const poslOperatora = (summKW * 1.74).toFixed(2)
            const proshlaSumm = (summElektro - 30.12).toFixed(2)
            return (
                <div>
                    <div ref={this.pdfRef}>
                        <div className={cls3.pdf3Container}>
                            <div className={cls3.pdf3Top}>
                                <img src={EKTop} alt="EKTop" />
                            </div>
                            <div className={cls3.pdf3Middle}>
                                <div className={cls3.pdf3NameAdress}>
                                    <div><b>Споживач:{this.props.userName}</b></div>
                                    <div><b>Адреса:</b> {this.props.userAdress}</div>
                                </div>
                                <div className={cls3.pdf3TopInfo}>
                                    <b>Рахунок за електроенергію №{this.props.userNummerRehnung} за {this.props.userMonateString} {this.props.userYear} року від 31.{this.props.userMonate - 1 || 12}.{this.props.userMonate == 1 ? this.props.userYear - 1 : this.props.userYear}<br />КС 969</b>
                                </div>
                                <div className={cls3.pdf3ShtrihKod}>
                                    <img src={EKItem} alt="EKItem" />
                                </div>
                                <div className={cls3.pdf3InfoSumm}>
                                    <div className={cls3.pdf3InfoSummTabl}>
                                        <div>Особовий рахунок</div>
                                        <div>Кінцева Дата оплати</div>
                                        <div>СУМА ДО СПЛАТИ</div>
                                        <div>{this.props.userNummerKonto} </div>
                                        <div>10/{this.props.userMonate == 12 ? '01' : Number(this.props.userMonate) + 1}/{this.props.userMonate == 12 ? Number(this.props.userYear) + 1 : this.props.userYear}</div>
                                        <div>{summElektro} грн</div>
                                    </div>
                                    <div className={cls3.pdf3InfoKod}>код ЕІС {this.props.userEIC}</div>
                                </div>
                                <div className={cls3.pdf3Line}>
                                    <div></div>
                                    <div className={cls3.pdf3LineText}>
                                        <div><b>Лінія відрізу</b></div>
                                        <div><b>Зберігати 3 роки</b></div>
                                    </div>
                                </div>
                                <div className={cls3.pdf3Middle2}>
                                    <div className={cls3.pdf3QR}>
                                        <img src={EKQR} alt="" />
                                    </div>
                                    <div className={cls3.pdf3NameAdress}>
                                    <div><b>Споживач:{this.props.userName}</b></div>
                                    <div><b>Адреса:</b> {this.props.userAdress}</div>
                                    </div>
                                    <div className={cls3.pdf3TopInfo}>
                                        <b>Рахунок за електроенергію №{this.props.userNummerRehnung} за {this.props.userMonateString} {this.props.userYear} року від 31.{this.props.userMonate - 1 || 12}.{this.props.userMonate == 1 ? this.props.userYear - 1 : this.props.userYear}</b>
                                    </div>
                                    <div className={cls3.pdf3InfoSumm}>
                                        <div className={cls3.pdf3InfoSummTabl}>
                                            <div>Особовий рахунок</div>
                                            <div>Кінцева Дата оплати</div>
                                            <div>СУМА ДО СПЛАТИ</div>
                                            <div>{this.props.userNummerKonto} </div>
                                            <div>10/{this.props.userMonate == 12 ? '01' : Number(this.props.userMonate) + 1}/{this.props.userMonate == 12 ? Number(this.props.userYear) + 1 : this.props.userYear}</div>
                                            <div>{summElektro} грн</div>
                                        </div>
                                        <div className={cls3.pdf3InfoKod}>код ЕІС {this.props.userEIC}</div>
                                    </div>
                                </div>

                            </div>
                            <div className={cls3.pdf3Tabellen}>
                                <div className={cls3.pdf3Tabel1}>
                                    <div>Інформація про лічильник та обсяги споживання </div>
                                    <div>Адреса лічильника: {this.props.userAdress} <br /> EIC-Код № {this.props.userEIC}</div>
                                    <div>Фактичні показники лічильника на</div>
                                    <div>Тариф на {this.props.userMonateString}, з ПДВ</div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div>2,64</div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div>Шкала</div>
                                    <div>попередні</div>
                                    <div>поточні</div>
                                    <div>Різниця</div>
                                    <div></div>
                                    <div>Період</div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div>{this.props.userDoElektro}</div>
                                    <div>{this.props.userAfterElektro}</div>
                                    <div>{Number(this.props.userAfterElektro) - Number(this.props.userDoElektro)} </div>
                                    <div></div>
                                    <div>01.{this.props.userMonate}-31.{this.props.userMonate}.2023</div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={cls3.pdf3Tabel2}>
                                    <div>Розрахунки</div>
                                    <div>Сума грн.</div>
                                    <div>Сума до сплати з попереднього рахунку, з ПДВ</div>
                                    <div>{proshlaSumm}</div>
                                    <div>Оплата після попереднього рахунку, з ПДВ</div>
                                    <div>-{proshlaSumm}</div>
                                    <div>Поточні нарахування ({summKW} кВт), без ПДВ</div>
                                    <div>{bezPDV}</div>
                                    <div></div>
                                    <div></div>
                                    <div>Разом нараховано, без ПДВ</div>
                                    <div>{bezPDV}</div>
                                    <div>ПДВ 20%</div>
                                    <div>{summPDF}</div>
                                    <div>Всього нараховано, з ПДВ </div>
                                    <div>{summElektro}</div>
                                    <div>В т.ч. за послуги оператора розподілу, грн. з ПДВ за тарифом 1,74061 грн. з ПДВ</div>
                                    <div>{poslOperatora}</div>
                                    <div></div>
                                    <div></div>
                                    <div>Сума до сплати, з ПДВ</div>
                                    <div>{summElektro}</div>
                                </div>
                            </div>
                            <div className={cls3.pdf3Bot}>
                                <img src={EKBot} alt="EKBot" />
                            </div>

                        </div>
                    </div>
                    <button onClick={this.generatePDF} className={cls.button}>generate pdf</button>
                </div>
            )
        }
    }
}

export default PdfComponent;