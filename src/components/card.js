export default (data) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
  <div class="item">
    <div class="item-value">${data.id}</div>
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
