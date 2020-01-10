import React from 'react';
import {translate} from "react-translate";
import {
    Card,
    CardFooter,
    Table,
} from './../../../components';

import {
    TrTableUsersList
} from "./components/TrTableUsersList";

import {
    Paginations
} from "../../components/Paginations";

const UsersList = ({t}) => (
        <Card className="mb-3">
            { /* START Table */}
            <div className="table-responsive-xl">
                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th className="align-middle bt-0 text-center"></th>
                            <th className="align-middle bt-0 text-center"></th>
                            <th className="align-middle bt-0 text-center">{t("first name and last name")}</th>
                            <th className="align-middle bt-0 text-center">{t("Email")}</th>
                            <th className="align-middle bt-0 text-center">{t("Phone")}</th>
                            <th className="align-middle bt-0 text-center ">
                                {t("Actions")}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TrTableUsersList />
                        <TrTableUsersList
                            id="2"
                        />
                        <TrTableUsersList
                            id="3"
                        />
                        <TrTableUsersList
                            id="4"
                        />
                        <TrTableUsersList
                            id="5"
                        />
                        <TrTableUsersList
                            id="6"
                        />
                        <TrTableUsersList
                            id="7"
                        />
                        <TrTableUsersList
                            id="8"
                        />
                        <TrTableUsersList
                            id="9"
                        />
                    </tbody>
                </Table>
            </div>
            { /* END Table */}
            <CardFooter className="d-flex justify-content-center pb-0">
                <Paginations />
            </CardFooter>
        </Card>

);

export default translate("FA")(UsersList);
