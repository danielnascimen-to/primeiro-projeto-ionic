import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Título do cartão</IonCardTitle>
            <IonCardSubtitle>subtítulo do cartão</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Pequena descricao do cartão</IonCardContent>

          <IonButton fill="clear">Action 1</IonButton>
          <IonButton fill="clear">Action 2</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
