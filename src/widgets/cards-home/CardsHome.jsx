import React from 'react'
import Container from '../../shared/helpers/Container'
import Car from '../../shared/assets/img/Car1.png'
import Shopping from '../../shared/assets/svg/shopping.svg'
import { useNavigate } from 'react-router-dom'

const CardsHome = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <div className='text-white' style={{
                marginTop: 100,
            }}>
                <div className="text">
                    <h1 className='text-center' style={{ fontSize: 36, marginBottom: 30 }}>ВСЕ АВТО КЫРГЗСТАНА </h1>
                    <h3 className='text-center' style={{ fontSize: 32 }}>Выбери свой автомобиль</h3>

                </div>
                <div className="cards" style={{display: 'flex', flexWrap: 'wrap', gap: 30, marginTop: 44}}>
                    <div className="card" style={{ width: '320px', height: 370, border: '1px solid #111213', background: '#111213', borderRadius: '20px', padding: '32px 24px', position: 'relative' }}>
                        <div className="name-model">
                            <h3 style={{ fontSize: 24, fontWeight: 600 }}>Tesla</h3>
                            <p style={{ fontSize: 16, fontWeight: 400, color: '#BABEC4' }}>Model X</p>
                        </div>
                        <div
                            className="img"
                            style={{
                                border: '1px solid #111213',  
                                width: 190, 
                                margin: 'auto',
                                height: 190, 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backdropFilter: 'blur(60px)', 
                                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(17, 18, 19, 0.8) 70%)' 
                            }}
                        >
                            <div className="image">
                                <img style={{width: 200}} src={Car} alt="" />
                            </div>
                        </div>
                        <div className="price">
                            <h3 style={{fontSize: 20, fontWeight: 600, marginTop: 40}}>$98,900</h3>
                        </div>
                        <div className="cart" style={{position: 'absolute',background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={Shopping} alt="" />
                        </div>
                    </div>
                    <div className="card" style={{ width: '320px', height: 370, border: '1px solid #111213', background: '#111213', borderRadius: '20px', padding: '32px 24px', position: 'relative' }}>
                        <div className="name-model">
                            <h3 style={{ fontSize: 24, fontWeight: 600 }}>Tesla</h3>
                            <p style={{ fontSize: 16, fontWeight: 400, color: '#BABEC4' }}>Model X</p>
                        </div>
                        <div
                            className="img"
                            style={{
                                border: '1px solid #111213',  
                                width: 190, 
                                margin: 'auto',
                                height: 190, 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backdropFilter: 'blur(60px)', 
                                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(17, 18, 19, 0.8) 70%)' 
                            }}
                        >
                            <div className="image">
                                <img style={{width: 200}} src={Car} alt="" />
                            </div>
                        </div>
                        <div className="price">
                            <h3 style={{fontSize: 20, fontWeight: 600, marginTop: 40}}>$98,900</h3>
                        </div>
                        <div className="cart" style={{position: 'absolute',background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={Shopping} alt="" />
                        </div>
                    </div>
                    <div className="card" style={{ width: '320px', height: 370, border: '1px solid #111213', background: '#111213', borderRadius: '20px', padding: '32px 24px', position: 'relative' }}>
                        <div className="name-model">
                            <h3 style={{ fontSize: 24, fontWeight: 600 }}>Tesla</h3>
                            <p style={{ fontSize: 16, fontWeight: 400, color: '#BABEC4' }}>Model X</p>
                        </div>
                        <div
                            className="img"
                            style={{
                                border: '1px solid #111213',  
                                width: 190, 
                                margin: 'auto',
                                height: 190, 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backdropFilter: 'blur(60px)', 
                                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(17, 18, 19, 0.8) 70%)' 
                            }}
                        >
                            <div className="image">
                                <img style={{width: 200}} src={Car} alt="" />
                            </div>
                        </div>
                        <div className="price">
                            <h3 style={{fontSize: 20, fontWeight: 600, marginTop: 40}}>$98,900</h3>
                        </div>
                        <div className="cart" style={{position: 'absolute',background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={Shopping} alt="" />
                        </div>
                    </div>
                    <div className="card" style={{ width: '320px', height: 370, border: '1px solid #111213', background: '#111213', borderRadius: '20px', padding: '32px 24px', position: 'relative' }}>
                        <div className="name-model">
                            <h3 style={{ fontSize: 24, fontWeight: 600 }}>Tesla</h3>
                            <p style={{ fontSize: 16, fontWeight: 400, color: '#BABEC4' }}>Model X</p>
                        </div>
                        <div
                            className="img"
                            style={{
                                border: '1px solid #111213',  
                                width: 190, 
                                margin: 'auto',
                                height: 190, 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backdropFilter: 'blur(60px)', 
                                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(17, 18, 19, 0.8) 70%)' 
                            }}
                        >
                            <div className="image">
                                <img style={{width: 200}} src={Car} alt="" />
                            </div>
                        </div>
                        <div className="price">
                            <h3 style={{fontSize: 20, fontWeight: 600, marginTop: 40}}>$98,900</h3>
                        </div>
                        <div className="cart" style={{position: 'absolute',background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={Shopping} alt="" />
                        </div>
                    </div>
                    <div className="card" style={{ width: '320px', height: 370, border: '1px solid #111213', background: '#111213', borderRadius: '20px', padding: '32px 24px', position: 'relative' }}>
                        <div className="name-model">
                            <h3 style={{ fontSize: 24, fontWeight: 600 }}>Tesla</h3>
                            <p style={{ fontSize: 16, fontWeight: 400, color: '#BABEC4' }}>Model X</p>
                        </div>
                        <div
                            className="img"
                            style={{
                                border: '1px solid #111213',  
                                width: 190, 
                                margin: 'auto',
                                height: 190, 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backdropFilter: 'blur(60px)', 
                                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(17, 18, 19, 0.8) 70%)' 
                            }}
                        >
                            <div className="image">
                                <img style={{width: 200}} src={Car} alt="" />
                            </div>
                        </div>
                        <div className="price">
                            <h3 style={{fontSize: 20, fontWeight: 600, marginTop: 40}}>$98,900</h3>
                        </div>
                        <div className="cart" style={{position: 'absolute',background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={Shopping} alt="" />
                        </div>
                    </div>
                </div>
                <div className="button" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 80}}>
                    <button onClick={() => {
                        navigate('/allCars')
                    }} style={{background: '#306AD9', color: 'white', padding: '14px 32px', borderRadius: '8px'}}>Показать ещё</button>
                </div>
            </div>
        </Container>
    )
}

export default CardsHome