import { Icon, Card, Table } from 'react-materialize';

const CourseFinishedComponent = () => {
    return(
        <>
            <Card
                title="Pelatihan Yang Sudah Lulus"
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
                        </tr>
                        <tr>
                            <td>
                                Alan
                            </td>
                            <td>
                                Jellybean
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Jonathan
                            </td>
                            <td>
                                Lollipop
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </>
    );
}

export default CourseFinishedComponent;