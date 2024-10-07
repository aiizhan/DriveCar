import React from 'react'
import Container from '../../shared/helpers/Container'
import BgIMage from '../../shared/assets/img/bg-services.png'
import Logo from '../../shared/assets/svg/Logo.svg'

const Services = () => {
    return (
        <Container>
            <div className='text-white w-full h-auto mt-96 relative z-100 pt-12'>
                <h1 className='text-white relative z-100 text-center text-lg font-normal'>Наши социальные сети</h1>
                <div className="icons text-center flex align-center justify-center gap-10 mt-6">
                    <i className="bi bi-telegram text-2xl"></i>
                    <i className="bi bi-facebook text-2xl"></i>
                    <i className="bi bi-instagram text-2xl"></i>
                    <i className="bi bi-twitter text-2xl"></i>
                </div>
                <div
                    className="services mt-12 bg-no-repeat bg-center bg-top pt-[120px]"
                    style={{
                        backgroundImage: `url(${BgIMage})`,
                        width: '100%',

                    }}
                >
                    <div className="text">
                        <h1 className='text-center text-3xl'>НАШИ УСЛУГИ</h1>
                    </div>
                    <div className="card-services flex gap-10 gap-y-20 flex-wrap pt-[80px]">
                        <div
                            className="card1 w-[450px] h-[190px] border border-white-500 text-center relative pt-[40px] rounded-[18px] backdrop-blur-lg"
                            style={{
                                backdropFilter: 'blur(16px)',
                                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                                background: 'rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div className="icon absolute" style={{
                                left: '47%',
                                top: '-30px'
                            }}>
                                <img src={Logo} alt="" />
                            </div>
                            <div className="text" style={{
                                height: '100%',
                                padding: '20px',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: 24,
                                }}>Фотосъемка и создание объявления</h3>
                            </div>
                        </div>
                        <div
                            className="card1 w-[450px] h-[190px] border border-white-500 text-center relative pt-[40px] rounded-[18px] backdrop-blur-lg"
                            style={{
                                backdropFilter: 'blur(16px)',
                                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                                background: 'rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div className="icon absolute" style={{
                                left: '47%',
                                top: '-30px'
                            }}>
                                <img src={Logo} alt="" />
                            </div>
                            <div className="text" style={{
                                height: '100%',
                                padding: '20px',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: 24,
                                }}>Фотосъемка и создание объявления</h3>
                            </div>
                        </div>
                        <div
                            className="card1 w-[450px] h-[190px] border border-white-500 text-center relative pt-[40px] rounded-[18px] backdrop-blur-lg"
                            style={{
                                backdropFilter: 'blur(16px)',
                                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                                background: 'rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div className="icon absolute" style={{
                                left: '47%',
                                top: '-30px'
                            }}>
                                <img src={Logo} alt="" />
                            </div>
                            <div className="text" style={{
                                height: '100%',
                                padding: '20px',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: 24,
                                }}>Фотосъемка и создание объявления</h3>
                            </div>
                        </div>
                        <div
                            className="card1 w-[450px] h-[190px] border border-white-500 text-center relative pt-[40px] rounded-[18px] backdrop-blur-lg"
                            style={{
                                backdropFilter: 'blur(16px)',
                                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                                background: 'rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div className="icon absolute" style={{
                                left: '47%',
                                top: '-30px'
                            }}>
                                <img src={Logo} alt="" />
                            </div>
                            <div className="text" style={{
                                height: '100%',
                                padding: '20px',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: 24,
                                }}>Фотосъемка и создание объявления</h3>
                            </div>
                        </div>
                        <div
                            className="card1 w-[450px] h-[190px] border border-white-500 text-center relative pt-[40px] rounded-[18px] backdrop-blur-lg"
                            style={{
                                backdropFilter: 'blur(16px)',
                                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                                background: 'rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div className="icon absolute" style={{
                                left: '47%',
                                top: '-30px'
                            }}>
                                <img src={Logo} alt="" />
                            </div>
                            <div className="text" style={{
                                height: '100%',
                                padding: '20px',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: 24,
                                }}>Фотосъемка и создание объявления</h3>
                            </div>
                        </div>
                        <div
                            className="card1 w-[450px] h-[190px] border border-white-500 text-center relative pt-[40px] rounded-[18px] backdrop-blur-lg"
                            style={{
                                backdropFilter: 'blur(16px)',
                                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                                background: 'rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div className="icon absolute" style={{
                                left: '47%',
                                top: '-30px'
                            }}>
                                <img src={Logo} alt="" />
                            </div>
                            <div className="text" style={{
                                height: '100%',
                                padding: '20px',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: 24,
                                }}>Фотосъемка и создание объявления</h3>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Services