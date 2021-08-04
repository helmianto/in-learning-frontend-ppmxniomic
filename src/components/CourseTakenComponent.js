import { Icon, Card, Table } from 'react-materialize';

const CourseTakenComponent = () => {
    return(
        <>
            <Card
                title="Pelatihan Yang Sedang Dipelajari"
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
            >
                <Table>
                    <thead>
                        <tr>
                            <th data-field="id">
                                Pelatihan
                            </th>
                            <th data-field="name">
                                Progress
                            </th>
                            <th data-field="price">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Alvin
                            </td>
                            <td>
                                Eclair
                            </td>
                            <td>
                                $0.87
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Alan
                            </td>
                            <td>
                                Jellybean
                            </td>
                            <td>
                                $3.76
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Jonathan
                            </td>
                            <td>
                                Lollipop
                            </td>
                            <td>
                                $7.00
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </>
    );
}

export default CourseTakenComponent;