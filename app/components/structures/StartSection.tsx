import Title, { SubTitle } from './Title'
import { Parallax, Background } from 'react-parallax'

export default function StartSection(){
    return(
        <>
        <Title></Title>
        <SubTitle></SubTitle>
            <Parallax className='fallen-scooter drop-shadow-xl' strength={400}>
                <Background>
                    <div className='content '>
                        <img
                        src="https://cdn.sanity.io/images/xl8ls2xi/production/73097d2b39bf5fa68fa5fcb169d5151869fbff3b-2000x1156.jpg?q=85&auto=format"
                        className='z-10 min-h-screen  min-w-min drop-shadow-xl'
                        alt='scooter'>
                        </img>
                    </div>
                </Background>
            </Parallax>
        </>
    )
}