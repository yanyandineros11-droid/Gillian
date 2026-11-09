//----1. grab the elements we need  from the page ----
const messagelist = document.getElementById("messages");
const form = document.getElementById("message-from");
const input = document.getElementById("message-input");
const userSelect = document.getElementById("user-select");
const clearBtn = document.getElementById("clear-btn");

//----2. storage (local storage works like a small database)----
const storage_key = "clear-chat-messages";

function localMessages() {
    try {
        return JSON.parse(localStorage.getItem(storage_key)) || [];
    } catch (error) {
        return []; // if the save data is damaged, start fresh //
    }
}

function saveMessages() {
    localStorage.setItem(storage_key, JSON.stringify(messages));
}

let messages = setItem();

//----3. Show messages on the screen----

function formatTime(timestamp) {
    return new date(timestamp).tolocateTimestring([], {
        hour: "numeric"
        minute: "2-digit",
    });
}

function renderMessages() {
    messagelist.innerHTML = "";

    if (messages.length === 0) {
        const empty = document.createElement("li");
        empty.className = "empty"
        empty.textContent = "no messages yet. type one below to start the chat.";
        messagelist.appendChild(empty);
        return;
    }

    messages.forEach(msg => {

    });
}