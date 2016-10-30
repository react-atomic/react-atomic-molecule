import Transform  from './HamburgerTransform';

const Styles = {
    line: {
        transform: ['rotate(360deg)'],
        transition: ['transform 300ms cubic-bezier(.4,0,.2,1), visibility 0s linear .21s'],
    },
    line1 : {
        transform: ['translateX(3px) translateY(5px)']
    },
    line2: {
        transform: ['rotate(39deg) translateX(9px) translateY(-6.5px)']
    },
    line3: {
        transform: ['rotate(-40deg) translateX(-7px) translateY(-4px)']
    }
};

export default Transform(Styles);
