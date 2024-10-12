import React from 'react'
import Container from '../../shared/helpers/Container'
import Car from '../../shared/assets/img/Card2.png'

const Description = () => {
    return (
        <Container>
            <div className="description" style={{marginTop: 100 }}>
                <div className="text" style={{ width: 900, textAlign: 'center', margin: 'auto' }}>
                    <h1 style={{ color: 'white', fontSize: 32, fontWeight: 600, textTransform: 'uppercase', marginBottom: 22 }}>3 аргумента почему вам стоит доверить решение вашего автомобильного вопроса </h1>
                </div>
                <div className="descriptions" style={{display: 'flex',height: 345 }}>
                    <div className="left" style={{
                        width: '50%',
                        padding: '60px 0px 60px 54px',
                        background: 'linear-gradient(90deg, #0A0A0B 2.46%, rgba(10, 10, 11, 0.995) 49.28%, rgba(10, 10, 11, 0) 100%)'
                    }}>                        <div className="text-white" >
                            <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 500 }}>Высокий стандарт безопасности</h2>
                            <p style={{ fontSize: 18, fontWeight: '400' }}>Высокий стандарт безопасности: Наш автомобиль оснащен передовыми системами безопасности, включая адаптивный круиз-контроль, систему предупреждения столкновений и автоматическое экстренное торможение. Эти функции разработаны для обеспечения максимальной защиты водителя и пассажиров, что делает наш автомобиль надежным выбором для семьи.</p>
                        </div>
                    </div>
                    <div className="right" style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(334.53deg, #0A0A0B 14.35%, rgba(10, 10, 11, 0.7) 33.24%, rgba(10, 10, 11, 0) 45.92%)' }}>
                        <div className="image">
                            <img width={500} src={Car} alt="" />
                        </div>
                    </div>
                </div>
                <div className="descriptions" style={{display: 'flex', height: 345 }}>

                    <div className="right" style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(334.53deg, #0A0A0B 14.35%, rgba(10, 10, 11, 0.7) 33.24%, rgba(10, 10, 11, 0) 45.92%)' }}>
                        <div className="image">
                            <img width={500} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="left" style={{
                        width: '50%',
                        padding: '60px 0px 60px 54px',
                        background: 'linear-gradient(90deg, #0A0A0B 2.46%, rgba(10, 10, 11, 0.995) 49.28%, rgba(10, 10, 11, 0) 100%)'
                    }}>                        <div className="text-white" >
                            <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 500 }}>Высокий стандарт безопасности</h2>
                            <p style={{ fontSize: 18, fontWeight: '400' }}>Высокий стандарт безопасности: Наш автомобиль оснащен передовыми системами безопасности, включая адаптивный круиз-контроль, систему предупреждения столкновений и автоматическое экстренное торможение. Эти функции разработаны для обеспечения максимальной защиты водителя и пассажиров, что делает наш автомобиль надежным выбором для семьи.</p>
                        </div>
                    </div>
                </div>
                <div className="descriptions" style={{display: 'flex',height: 345 }}>
                    <div className="left" style={{
                        width: '50%',
                        padding: '60px 0px 60px 54px',
                        background: 'linear-gradient(90deg, #0A0A0B 2.46%, rgba(10, 10, 11, 0.995) 49.28%, rgba(10, 10, 11, 0) 100%)'
                    }}>                        <div className="text-white" >
                            <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 500 }}>Высокий стандарт безопасности</h2>
                            <p style={{ fontSize: 18, fontWeight: '400' }}>Высокий стандарт безопасности: Наш автомобиль оснащен передовыми системами безопасности, включая адаптивный круиз-контроль, систему предупреждения столкновений и автоматическое экстренное торможение. Эти функции разработаны для обеспечения максимальной защиты водителя и пассажиров, что делает наш автомобиль надежным выбором для семьи.</p>
                        </div>
                    </div>
                    <div className="right" style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(334.53deg, #0A0A0B 14.35%, rgba(10, 10, 11, 0.7) 33.24%, rgba(10, 10, 11, 0) 45.92%)' }}>
                        <div className="image">
                            <img width={500} src={Car} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Description