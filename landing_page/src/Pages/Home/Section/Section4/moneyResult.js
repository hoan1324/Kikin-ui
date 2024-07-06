import { convertDis, convertPercentFee } from "../../../../Convert";

// Tính tổng tiền với các chi phí và chiết khấu
const totalMoney = (amount, payBack, credit, checkbox) => {
  return (
    Number(amount) +
    Number(valueFee(amount, payBack, credit)) -
    Number(valueDiscount(amount, payBack, credit, checkbox))
  );
};

// Tính khoản trả hàng tháng
const repayment = (amount, payBack, credit, checkbox) => {
  return Number(totalMoney(amount, payBack, credit, checkbox)) / Number(payBack);
};

// Tính phí chuyển đổi
const convertFee = (valuePayback, valueCredit) => {

  let finalValue = 0;

  convertPercentFee.forEach((element) => {
    if (valueCredit == element.id) {
      finalValue = element.init + element.step * (valuePayback - 1)
    }
  })
  return finalValue;
}

// Tính tổng phí
const valueFee = (amount, payBack, credit) => {
  return Number(amount) * Number(convertFee(payBack, credit));
};

// Tính tổng chiết khấu
const valueDiscount = (amount, payBack, credit, checkbox) => {
  return Number(valueFee(amount, payBack, credit)) * Number(convertDiscounts(checkbox));
};

// Tính tổng giá trị chiết khấu
const convertDiscounts = (checkbox) => {
  if (!Array.isArray(convertDis) || typeof checkbox !== 'object') {
    return 0;
  }

  return convertDis.reduce((total, element) => {
    if (Array.isArray(element.id) && typeof element.step === 'number') {
      element.id.forEach(id => {
        if (checkbox[id] === true) {
          total += element.step;
        }
      });
    }
    return total;
  }, 0);
};
export { convertDiscounts, valueDiscount, valueFee, convertFee, repayment, totalMoney };
