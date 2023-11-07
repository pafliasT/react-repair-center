import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardHeader, Icon } from "@ui5/webcomponents-react";
import "./Home.css";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="homeContainer">
      <Card
        header={
          <CardHeader
            avatar={<Icon name="list" />}
            titleText={t('All Items')}
          />
        }
        className="card"
      >
        {/* Content of the card */}
      </Card>
      <Card
        header={
          <CardHeader
            avatar={<Icon name="future" />}
            titleText={t("Incoming")}
          />
        }
        className="card"
      ></Card>
      <Card
        header={
          <CardHeader
            avatar={<Icon name="inbox" />}
            titleText={t("Received")}
          />
        }
        className="card"
      ></Card>
      <Card
        header={
          <CardHeader
            avatar={<Icon name="feedback" />}
            titleText={t("QC Inspection")}
          />
        }
        className="card"
      ></Card>
      <Card
        header={
          <CardHeader
            avatar={<Icon name="in-progress" />}
            titleText={t("Feedback Review")}
          />
        }
        className="card"
      ></Card>
      <Card
        header={
          <CardHeader
            avatar={<Icon name="cargo-train" />}
            titleText={t("Managed")}
          />
        }
        className="card"
      ></Card>
      <Card
        header={
          <CardHeader
            avatar={<Icon name="shipping-status" />}
            titleText={t("To be shipped")}
          />
        }
        className="card"
      ></Card>
      <Card
        header={
          <CardHeader
            avatar={<Icon name="inspection" />}
            titleText={t("Shipped")}
          />
        }
        className="card"
      ></Card>
    </div>
  );
}

export default Home;
