"use strict";

const markRead = document.querySelector(".read-text");
const notificationsQuantity = document.querySelector(".notifications-quantity");

const notificationItem = document.querySelectorAll(".notification-item");
const unreadIcon = document.querySelectorAll(".unread-icon");

markRead.addEventListener("click", function () {
  notificationsQuantity.innerHTML = "0";

  //iterates over each element containg notification-item class and removes the class unread
  notificationItem.forEach((notification) => {
    notification.classList.remove("unread");
  });

  unreadIcon.forEach((icon) => {
    icon.remove();
  });
});
