import { Parallax, Background } from 'react-parallax'

export default function EndSection() {
    return (
        <Parallax className='scooter-hub' strength={400}>
            <div className=' img-txt-names my-80'>
                James Bonsu,
                Zach Florian,
                Shichen Ma,
                Hayden Godfrey,
                Robin Gould,
                Li Yuyao
            </div>
            <Background className=''>
                <div className='content'>
                    <img
                        src="https://www.redbrick.me/wp-content/uploads/2021/08/ernest-ojeh-Jmz7CfSRQzI-unsplash-2.jpg"
                        className=' min-h-screen min-w-fit '
                        alt='scooter'>
                    </img>
                </div>
            </Background>
        </Parallax>
    )
}