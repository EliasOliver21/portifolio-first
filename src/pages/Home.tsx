import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from '../assets/Img-perfil.png'
import  {Animated_background}  from "../components/Animated_background";

export const Home = () => {

    const StyledHome = styled("div")(({theme}) => ({

        backgroundColor: theme.palette.primary.main,       
        paddingTop:"5vh",
        display:"flex",
        [theme.breakpoints.down('lg')]: { // <= mobile
            paddingTop:"10vh",
            height: '100vh'

        },
        [theme.breakpoints.up('xs')]: { // >=mobile
            height:'100vh'
            
        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "5vh",
            height:'100vh'
            
        }
        

    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "30%",
        position:"relative",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        [theme.breakpoints.up('xs')]: { // <= mobile
            width:'60%'

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            width:'35%'
        }

    }))

    return<>

        <StyledHome >
            <Container maxWidth='lg' >

                <Grid container rowSpacing={2} sx={{justifyContent:"center"}}>


                    <Animated_background></Animated_background>

                    <Box
                        sx={{
                        position: 'absolute',
                        top: 65,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 0.5 = 50% escuro
                        zIndex: 1,
                        }}
                    />
                    
                    <Box position="relative"sx={{textAlign:'center',justifyContent:'center',overflow:'hidden',zIndex:2}}>

                        <StyledImg src={Avatar}/>

                    </Box>

                    <Box textAlign={'center'} sx={{position:"relative", zIndex:2}}>

                        <Typography color="secondary" textAlign={'center'} variant="h4">OI, meu nome é Elias!</Typography>
                        <p></p><Typography color="secondary" textAlign={'justify'} variant="h6">Sou estudante do 7º semestre do curso de engenharia de software na UnB. Sempre amei a tecnologia e a ciência, apesar de escolher as engenharias rsrs. Veja os projetos e aplicações que já desenvolvi ou participei do processo de desenvolvimento, caso queira, me contate através das minhas redes.</Typography>

                    </Box>

                </Grid>

                
                
            </Container>
        </StyledHome>
    </>
}