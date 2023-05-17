import bodyParser from "body-parser";

export default (app: any) => {
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: false,
        })
    );
};
