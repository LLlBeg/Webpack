export default (data) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="item">
    <div class="item-name">ID:</div>
    <div class="item-name">NAME:</div>
    <div class="item-name">AGE:</div>
    <div class="item-name">E-MAIL:</div>
    <div class="item-name">CITY:</div>
    <div class="item-name">COMPANY:</div>
    <div class="item-name">BIRTHDAY:</div>
  </div>
  <div class="item">
    <div class="item-name">${data.id}</div>
    <div class="item-value">${data.firstName} ${data.lastName}</div>
    <div class="item-value">${data.age}</div>
    <div class="item-value">${data.email}</div>
    <div class="item-value">${data.address.city}</div>
    <div class="item-value">${data.company.name}</div>
    <div class="item-value">${data.birthDate}</div>
  </div>
          `;

  return card;
};
