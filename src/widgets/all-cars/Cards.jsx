import React, { useState } from 'react'
import Car from '../../shared/assets/img/Car1.png'
import Shopping from '../../shared/assets/svg/shopping.svg'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Cards = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='mt-[30px]'>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select
                    displayEmpty
                    value={age}
                    onChange={handleChange}
                    inputProps={{
                        'aria-label': 'Without label',
                    }}
                    sx={{
                        color: 'white', 
                        '.MuiOutlinedInput-notchedOutline': {
                            border: 'none', 
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: 'none', 
                        },
                        '.MuiSvgIcon-root': {
                            color: 'white',
                        },
                        backgroundColor: 'transparent', 
                    }}
                >
                    <MenuItem value="">
                        <em>По умолчанию</em> 
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <div className="cards flex gap-[20px] flex-wrap">

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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <img style={{ width: 200 }} src={Car} alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}>$98,900</h3>
                    </div>
                    <div className="cart" style={{ position: 'absolute', background: '#4177DC', bottom: 0, right: 0, width: 56, height: 48, borderRadius: '20px 0px 20px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={Shopping} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards