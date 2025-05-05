import Lottie from 'lottie-react';
import animationData from '../lotties/rocket-loading.json';

export default function Fallback() {
    return (
        <section className="w-screen min-h-screen flex justify-center items-center bg-black">
            <div>
                <Lottie
                    loop={true}
                    autoplay={true}
                    animationData={animationData}
                    height={400}
                    width={400}
                />
            </div>
        </section>
    )
}