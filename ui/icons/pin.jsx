import {
    React,
    Card,
    Content,
    Component,
    SemanticUI,
    Header,
    XIco,
    reactStyle
} from '../../src/index';


export default class PinIcon extends Component
{
    render()
    {
        let pinStyles = [Styles.pin];
        let pinContent = null;
        let pinOpenStyle = {
        };
        if (this.props.open) {
            pinStyles=[Styles.pin,Styles.pinOpen];
            let header = null;
            if (this.props.header) {
                header = <Header style={Styles.header}>{this.props.header}</Header> 
            }
            pinContent = <Card style={{
                background: pinOpenBackground
            }}>
                <Content>
                    {header}
                    {this.props.children}
                    <XIco style={{bottom:'5px',top:null}} />
                </Content>
            </Card>;
        }
        return (
            <SemanticUI style={Styles.container} {...this.props}>
                <div styles={pinStyles} >
                    {pinContent}
                </div>
                <div styles={Styles.point} />
            </SemanticUI>
        )
    }
}

const pinOpenBackground = '#c4c1cd';
const Styles = {
    container: {
        position: 'relative'
    },
    header: {
        marginLeft: '20px'
    },
    pin: reactStyle({
        width: '30px',
        height: '30px',
        borderRadius: ['50% 50% 50% 0'],
        background: '#89849b',
        transform: ['rotate(-45deg)'],
        margin: '-20px 0 0 -20px',
        transition: ['all 0.25s ease-in-out']
    }),
    pinOpen: reactStyle({
        width: '250px',
        borderRadius: ['5px'],
        transform: ['rotate(0)'],
    }),
    point: reactStyle({
        width:'14px',
        height:'14px',
        margin: '8px 0 0 8px',
        background: '#2f2f2f',
        position: 'absolute',
        top:0,
        left:'-20px',
        borderRadius: ['50%']
    })
};
