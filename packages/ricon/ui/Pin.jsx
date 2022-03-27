import useLazyInject from "./useLazyInject";
import SemanticUI from "./SemanticUI";

/**
    let thisHeader = null;
    if (header) {
      thisHeader = <Header style={{marginLeft: 20}}>{header}</Header>;
    }
    pinContent = (
      <Card
        style={{
          background: pinOpenBackground,
        }}
      >
        <Content>
          {thisHeader}
          {children}
        </Content>
      </Card>
    );
 */

const Pin = ({open, content, label, ...props}) => {
  injects = useLazyInject(InjectStyles, injects);
  let pinStyles = [injects.pin];
  let pinContent = null;
  if (open) {
    pinStyles = [injects.pin, injects.pinOpen];
    pinContent = content;
  }
  const thisLabel = label ? (
    <SemanticUI styles={injects.label}>{label}</SemanticUI>
  ) : (
    <SemanticUI style={Styles.point} />
  );

  return (
    <SemanticUI style={Styles.container} {...props}>
      <SemanticUI styles={pinStyles}>{pinContent}</SemanticUI>
      {thisLabel}
    </SemanticUI>
  );
};

export default Pin;

const pinOpenBackground = "#c4c1cd";
const Styles = {
  container: {
    position: "relative",
    display: "inline-block",
  },
  point: {
    width: "14px",
    height: "14px",
    margin: "8px 0 0 8px",
    background: "#2f2f2f",
    position: "absolute",
    top: 0,
    borderRadius: "50%",
  },
};

let injects;
const InjectStyles = {
  label: [
    {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: ["translate(-50%, -50%)"],
    },
  ],
  pin: [
    {
      width: "30px",
      height: "30px",
      borderRadius: ["50% 50% 50% 0"],
      background: "#89849b",
      transform: ["rotate(-45deg)"],
      transition: ["all 0.25s ease-in-out"],
    },
  ],
  pinOpen: [
    {
      width: "250px",
      height: "auto",
      borderRadius: ["5px"],
      transform: ["rotate(0)"],
    },
  ],
};
