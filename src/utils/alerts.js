import { notification } from "antd";

const openNotification = () => {
  notification["error"]({
    message: "Erro ao conectar com api",
    description:
      "Por favor, verifique a conexão com a internet e tente novamente.",
    duration: 0,
  });
};

export default openNotification;
