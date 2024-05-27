const ul = document.querySelector("ul");
        const input = document.querySelector("input");
        const btn = document.querySelector("button");

        btn.addEventListener("click", () => {
          const item = input.value;
          input.value = "";

          const list = document.createElement("li");
          const span = document.createElement("span");
          const dbtn = document.createElement("button");

          list.appendChild(span);
          span.textContent = item;
          list.appendChild(dbtn);
          dbtn.textContent = "Delete";
          ul.appendChild(list);

          dbtn.addEventListener("click", ()=>{
            ul.removeChild(list);
          });
          input.focus();
        });
