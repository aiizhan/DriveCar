import { useState } from 'react'
import { Box, Typography, TextField, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import { GlobalStyles } from '@mui/system';
import Button from '@mui/material/Button';



const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [isOpenYear, setIsOpenYear] = useState(false);
    const [year, setYear] = useState('');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleYear = () => {
        setYear(!year);
    };

    // Select Marka State
    const [isOpenMarka, setIsOpenMarka] = useState(false)
    const [isOpenModel, setIsOpenModel] = useState(false)

    const handleMarka = () => {
        setIsOpenMarka(!isOpenMarka)
    }
    const handleModel = () => {
        setIsOpenModel(!isOpenModel)
    }

    const cars = [
        {
            name: 'Honda'
        },
        {
            name: 'Toyota'
        },
        {
            name: 'Audi'
        },
        {
            name: 'BMW'
        },
        {
            name: 'Mersedes'
        },
        {
            name: 'Kia'
        },
        {
            name: 'Mazda'
        },
        {
            name: 'Nissan'
        },
        {
            name: 'Daewoo'
        },
        {
            name: 'Land Rover'
        },
        {
            name: 'Subaru'
        },
        {
            name: 'Porsche'
        },
        {
            name: 'Porsche'
        },
        {
            name: 'Porsche'
        },
        {
            name: 'Porsche'
        },
        {
            name: 'Porsche'
        },
        {
            name: 'Porsche'
        },
        {
            name: 'Porsche'
        },
        {
            name: 'Porsche'
        },
        {
            name: 'Porsche'
        },
        {
            name: 'Porsche'
        },
        {
            name: 'Porsche'
        },
        {
            name: 'Porsche'
        },
    ]
    return (
        <div className='bg-[#161A21] w-[305px] mt-[40px] pt-[30px] pb-[15px] pl-[30px] pr-[30px] rounded-[10px]'>
            <GlobalStyles styles={{
                '::-webkit-scrollbar': {
                    width: '0',
                },
                '::-webkit-scrollbar-thumb': {
                    backgroundColor: 'transparent',
                },
            }} />

            {/* Select Price */}
            <div className="selects">
                <Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        onClick={handleToggle}
                        sx={{
                            border: '1px solid #ccc',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            color: 'white',
                            width: '100%',
                            borderRadius: '7px'
                        }}
                    >
                        <Typography variant="body1">Цена</Typography>
                        <IconButton size="small" sx={{ marginLeft: 'auto', color: 'white' }}>
                            <ExpandMoreIcon />
                        </IconButton>
                    </Box>
                    {isOpen && (
                        <Box display="flex" justifyContent="space-between" mt={2}>
                            <TextField
                                placeholder="от"
                                variant="outlined"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                InputProps={{
                                    sx: { color: 'white', borderColor: 'white', height: '40px' },
                                }}
                                sx={{
                                    width: '115px',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-root.Mui-focused': {
                                        outline: 'none',
                                    },
                                }}
                            />
                            <TextField
                                placeholder="до"
                                variant="outlined"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                InputProps={{
                                    sx: { color: 'white', height: '40px' },
                                }}
                                sx={{
                                    width: '115px',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-root.Mui-focused': {
                                        outline: 'none',
                                    },
                                }}
                            />
                        </Box>
                    )}
                </Box>
            </div>
            {/* Select Marka */}
            <div className="select-marka mt-[15px]">
                <Box>
                    <Box display="flex"
                        alignItems="center"
                        onClick={handleMarka}
                        sx={{
                            border: '1px solid #ccc',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            color: 'white',
                            width: '100%',
                            borderRadius: '7px'
                        }}>
                        <Typography variant="body1">Марка</Typography>
                        <IconButton size="small" sx={{ marginLeft: 'auto', color: 'white' }}>
                            <ExpandMoreIcon />
                        </IconButton>

                    </Box>
                    {isOpenMarka && (
                        <Box sx={{ paddingLeft: '20px', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px', height: '500px', overflowY: 'auto', borderBottom: '1px solid white' }}>
                            {cars.map((el, index) => {
                                return (
                                    <FormControlLabel
                                        key={index}
                                        control={
                                            <Checkbox
                                                sx={{
                                                    borderRadius: '50%', // Круглая форма
                                                    border: '1px solid white', // Белая граница
                                                    width: 24, // Ширина чекбокса
                                                    height: 24, // Высота чекбокса
                                                    marginRight: '10px',
                                                    '&.Mui-checked': {
                                                        backgroundColor: 'white',
                                                        color: 'white',
                                                        border: 'none'
                                                    },
                                                    '&.Mui-label': {
                                                        color: 'red'
                                                    }
                                                }}
                                            />
                                        }
                                        label={el.name}
                                    />
                                )
                            })}

                        </Box>
                    )}
                </Box>
            </div>

            {/* Select Model */}
            <div className="select-marka mt-[15px]">
                <Box>
                    <Box display="flex"
                        alignItems="center"
                        onClick={handleModel}
                        sx={{
                            border: '1px solid #ccc',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            color: 'white',
                            width: '100%',
                            borderRadius: '7px'
                        }}>
                        <Typography variant="body1">Модель</Typography>
                        <IconButton size="small" sx={{ marginLeft: 'auto', color: 'white' }}>
                            <ExpandMoreIcon />
                        </IconButton>

                    </Box>
                    {isOpenModel && (
                        <Box sx={{ paddingLeft: '20px', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px', height: '500px', overflowY: 'auto', borderBottom: '1px solid white' }}>
                            {cars.map((el, index) => {
                                return (
                                    <FormControlLabel
                                        key={index}
                                        control={
                                            <Checkbox
                                                sx={{
                                                    borderRadius: '50%', // Круглая форма
                                                    border: '1px solid white', // Белая граница
                                                    width: 24, // Ширина чекбокса
                                                    height: 24, // Высота чекбокса
                                                    marginRight: '10px',
                                                    '&.Mui-checked': {
                                                        backgroundColor: 'white',
                                                        color: 'white',
                                                        border: 'none'
                                                    },
                                                    '&.Mui-label': {
                                                        color: 'red'
                                                    }
                                                }}
                                            />
                                        }
                                        label={el.name}
                                    />
                                )
                            })}

                        </Box>
                    )}
                </Box>
            </div>
            <div className="selects mt-[15px]">
                <Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        onClick={handleYear}
                        sx={{
                            border: '1px solid #ccc',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            color: 'white',
                            width: '100%',
                            borderRadius: '7px'
                        }}
                    >
                        <Typography variant="body1">Цена</Typography>
                        <IconButton size="small" sx={{ marginLeft: 'auto', color: 'white' }}>
                            <ExpandMoreIcon />
                        </IconButton>
                    </Box>
                    {year && (
                        <Box display="flex" justifyContent="space-between" mt={2}>
                            <TextField
                                placeholder="Год "
                                variant="outlined"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                InputProps={{
                                    sx: { color: 'white', borderColor: 'white', height: '40px' },
                                }}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-root.Mui-focused': {
                                        outline: 'none',
                                    },
                                }}
                            />
                        </Box>
                    )}
                </Box>
            </div>
            <Button sx={{marginTop: '30px', width: '100%'}} variant="contained" disableElevation>
                Применить
            </Button>
        </div>
    )
}

export default Filter