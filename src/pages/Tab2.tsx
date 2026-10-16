import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

const agendaContatos = [
  { nome: "Ana Maria", email: "ana.maria@email.com", tel: "(21) 91234-5678" },
  {
    nome: "Carlos Eduardo",
    email: "carlos.eduardo@email.com",
    tel: "(21) 92345-6789",
  },
  {
    nome: "Felipe Santana",
    email: "felipe.santana@email.com",
    tel: "(21) 93456-7890",
  },
  {
    nome: "Mariana Ribeiro",
    email: "mariana.ribeiro@email.com",
    tel: "(21) 94567-8901",
  },
  {
    nome: "Sabrina Xavier",
    email: "sabrina.xavier@email.com",
    tel: "(21) 95678-9012",
  },
];

function Example() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contatos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader className="cabecalho" collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contatos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {agendaContatos.map((contato, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{contato.nome}</h2>
                <p>{contato.email}</p>
                <p>{contato.tel}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Example;
