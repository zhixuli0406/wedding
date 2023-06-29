import { Box, Typography, Button } from "@mui/material";
import DraftsIcon from '@mui/icons-material/Drafts';

const Hero = ({ setCurrentOverflow }) => {
    return (
        <section id="hero">
            <Box
                sx={{
                    color: 'rgb(255 255 255 / var(--tw-text-opacity))',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage: 'url()',
                    minHeight: '100vh',
                    position: 'relative',
                    color: 'rgb(255 255 255)',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'rgb(0 0 0 / 0.7)',
                        zIndex: 10,
                        inset: '0px',
                        position: 'absolute'
                    }}
                />
                <Box
                    sx={{
                        textAlign: 'center',
                        paddingTop: '7rem',
                        paddingBottom: '7rem',
                        paddingLeft: '3rem',
                        paddingRight: '3rem',
                        justifyContent: 'space-evenly',
                        flexDirection: 'column',
                        height: '100vh',
                        display: 'flex',
                        zIndex: 20,
                        position: 'relative'

                    }}
                >
                    <Box>
                        <Typography sx={{ fontWeight: 200, fontSize: '0.75rem', marginBottom: '1rem' }}>The Wedding of</Typography>
                        <Typography variant="h1" sx={{ fontWeight: 300, fontSize: '2.25rem', lineHeight: '2.5rem', marginTop: '0.5rem' }}>荔枝 & 蓓蓓</Typography>
                        <Typography sx={{ fontWeight: 200, fontSize: '0.8rem', marginTop: '1rem' }}>
                            2023/07/00 (日)
                        </Typography>
                    </Box>
                    <Box sx={{ gap: '0.5rem', alignItems: 'center', flexDirection: 'column', display: 'flex' }}>
                        <Typography sx={{ fontSize: '0.8rem', margin: 0 }}>台灣基督長老教會 高雄中會 大林教會</Typography>
                        <Typography sx={{ fontSize: '0.8rem', margin: 0 }}>
                            842高雄市旗山區教會巷3號之1號
                        </Typography>
                        <Button
                            variant="outlined"
                            startIcon={<DraftsIcon />}
                            sx={{
                                color: 'white',
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                lineHeight: '1.25rem',
                                paddingTop: '0.75rem',
                                paddingBottom: '0.75rem',
                                paddingLeft: '1.5rem',
                                paddingRight: '1.5rem',
                                backgroundColor: '#ffffff36',
                                borderColor: '#bdb08f8c',
                                borderWidth: '1px',
                                borderRadius: '0.5rem',
                                gap: '0.5rem',
                                alignItems: 'center',
                                display: 'flex',
                                marginTop: '1.5rem'
                            }}
                            onClick={() => { setCurrentOverflow("auto"); }}
                        >
                            接受邀請
                        </Button>
                    </Box>
                </Box>
            </Box>
        </section>

    )
}

export default Hero;