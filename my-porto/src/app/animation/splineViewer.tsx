import Spline from '@splinetool/react-spline';

export default function SplineViewer() {
  return (
    <div className="w-full h-[400px] lg:h-screen flex justify-center items-center">
      <Spline scene="https://prod.spline.design/uQh0-jPInSqVzgXO/scene.splinecode" />
    </div>
  );
}
