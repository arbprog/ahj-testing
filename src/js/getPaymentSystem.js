export default function getPaymentSystem(cardNumber) {
  let paymentSystem = '';
  const listPaymentSystems = [
    { paymentSystemName: 'Mir', num: [2] },
    { paymentSystemName: 'Diners_Club', num: [30, 36, 38, 39] },
    { paymentSystemName: 'JCB', num: [31, 35] },
    { paymentSystemName: 'American_Express', num: [34, 37] },
    { paymentSystemName: 'Visa', num: [4] },
    { paymentSystemName: 'MasterCard', num: [51, 52, 53, 54, 55] },
    { paymentSystemName: 'Discover', num: [60, 65] },
  ];

  const regexp = /^[24]/.test(cardNumber);
  const position = regexp ? 1 : 2;
  const partCardNumber = cardNumber.split('').slice(0, position).join('');

  listPaymentSystems.forEach((item) => {
    // eslint-disable-next-line eqeqeq
    const result = item.num.some((number) => partCardNumber == number);
    // eslint-disable-next-line no-return-assign
    return result ? paymentSystem = item.paymentSystemName : '';
  });

  return paymentSystem;
}
