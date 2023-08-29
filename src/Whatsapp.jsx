// const twilio = require('twilio');
import React from 'react';

// const accountSid = 'ACab329a73dc807c655ea8f3ad0e3e4f25';
// const authToken = 'ec7077a22d1ce29ffb6c93c0c5e5599d';
// const client = new twilio(accountSid, authToken);
// s
// const sendReceipt = (customerNumber, receiptUrl) => {
//     client.messages.create({
//         from: 'whatsapp:+16203074977',
//         to: `whatsapp:${customerNumber}`,
//         mediaUrl: [receiptUrl],
//         body: 'Here is your receipt!',
//     })
//         .then(message => console.log(`Message sent to ${customerNumber}: ${message.sid}`))
//         .catch(error => console.error(error));
// };

const Receipt = () => {
    const customerNumber = '+2347011951761';
    const receiptUrl = 'http://temple-com.onrender.com/';

    // sendReceipt(customerNumber, receiptUrl);

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Receipt</h2>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Order number: 123456</p>
                    <p>Date: 22/04/2023</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Product A</td>
                                <td>$10.00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Product B</td>
                                <td>$15.00</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Product C</td>
                                <td>$20.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Total: $45.00</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Receipt;
