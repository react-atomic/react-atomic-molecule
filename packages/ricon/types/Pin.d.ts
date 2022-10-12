export default Pin;
/**
    const pinOpenBackground = "#c4c1cd";
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
declare function Pin({ open, content, label, ...props }: {
    [x: string]: any;
    open?: any;
    content?: any;
    label?: any;
}): JSX.Element;
