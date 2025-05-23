import { ShippingAddress } from "@prisma/client";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Heading,
  Text,
  Hr,
  Row,
  Column,
} from "@react-email/components";

const OrderReceivedEmail = ({
  shippingAddress,
  orderId,
  orderDate,
}: {
  shippingAddress: ShippingAddress;
  orderId: string;
  orderDate: string;
}) => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://casereptor.vercel.app";

  return (
    <Html>
      <Head />
      <Preview>Resumen de su pedido y entrega estimada</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={message}>
            <Img
              src={`${baseUrl}/velociraptor.jpeg`}
              width="65"
              height="73"
              alt="delivery reptor"
              style={{ margin: "auto" }}
            />
            <Heading style={global.heading}>Gracias por tu Orden!</Heading>
            <Text style={global.text}>
              Estamos preparando todo para que puedas recibir tu funda de
              telefono, en breve nos contactaremos con usted para coordinar la
              entrega. La entrega suele tardar 2 dias.
            </Text>
            <Text style={{ ...global.text, marginTop: "24px" }}>
              Si tiene alguna duda sobre su pedido, no dude en contactarnos con
              su numero de pedido y aqui estaremos para ayudarlo.
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={adressTitle}>Enviado a: {shippingAddress.name}</Text>
            <Text style={{ ...global.text, fontSize: "14px" }}>
              {shippingAddress.street}, {shippingAddress.city},{" "}
              {shippingAddress.state},{shippingAddress.postalCode},
              {shippingAddress.country},
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Row style={{ display: "inline-flex", marginBottom: "40px" }}>
              <Column style={{ width: "170px" }}>
                <Text style={global.paragraphWithBold}>N° de orden:</Text>
                <Text style={track.number}>{orderId}</Text>
              </Column>
              <Column>
                <Text style={global.paragraphWithBold}>Fecha de pedido:</Text>
                <Text style={track.number}>{orderDate}</Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={paddingY}>
            <Row>
              <Text style={{ ...footer.text, paddingTop:'30px', paddingBottom:'30px'}}>
              Por favor, contactenos si tiene alguna pregunta.(Si responde a este correo no podremos leerlo)
              </Text>
            </Row>
            <Row>
              <Text style={footer.text}>
                &copy;{new Date().getFullYear()} Casereptor. Todos los derechos
                reservados
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default OrderReceivedEmail;

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const message = {
  padding: "40px 74px",
  textAlign: "center",
} as React.CSSProperties;

const adressTitle = {
  ...paragraph,
  fontSize: "15px",
  fontWeight: "bold",
};

const footer = {
  policy: {
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  } as React.CSSProperties,
};
