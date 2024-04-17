import Title, { SubTitle } from './Title'
import { Parallax, Background } from 'react-parallax'

export default function StartSection(){
    return(
        <>
        <Title></Title>
        <SubTitle></SubTitle>
            <Parallax className='fallen-scooter drop-shadow-xl' strength={200}>
                <Background>
                    <div className='content '>
                        <img
                        src="https://i.pinimg.com/originals/fe/02/66/fe026605b330d36bc0ca511ab9d636ee.jpg"
                        className='z-10 min-h-screen  min-w-min drop-shadow-xl'
                        alt='scooter'>
                        </img>
                    </div>
                </Background>
            </Parallax>
        </>
    )
}