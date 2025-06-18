const tarjetas = [
      {
        nombre: "Almacen Lo de Juan",
        imagen: "../img/proyectos/WinFORM.png",
        descripcion: "Una app donde puedes realizar pedidos de productos",
        link: "https://github.com/Dantecito347/ParcialN1Almacen",
      },
      {
        nombre: "Revista Wakashii",
        imagen: "../img/proyectos/REVISTA PORTADA.jpg",
        descripcion: "Una revista donde puedes ver los animes más recientes",
        link: "https://drive.google.com/file/d/1MsBeliQkGJ-MxNdVhc5h8ZImn8rQ1Huq/view?usp=drive_link",
      },
      {
        nombre: "Sitio web promocional",
        imagen: "../img/proyectos/paginaHTML.png",
        descripcion: "Sitio web con un catálogo de productos e imágenes",
        link: "https://github.com/Emi271/Emir-Halter-Kober--Mi-preentrega",
      }
    ];

    const container = document.getElementById("cardContainer");

    tarjetas.forEach(item => {
      const card = document.createElement("div");
      card.className = "ui card animate__animated animate__fadeInUp";
      card.innerHTML = `
        <div class="image">
          <img class="cardImagen" src="${item.imagen}">
        </div>
        <div class="content">
          <div class="header">${item.nombre}</div>
          <div class="description">${item.descripcion}</div>
           <button class="button is-small is-info" onclick="abrirModal('${item.nombre}', '${item.descripcion}', '${item.imagen}', '${item.link}')">Ver más</button>
        </div>
      `;
      container.appendChild(card);
    });


    //CODIGO PARA EL MODAL OSEAA LA VENTANA UQE SE ABRE CUANDO TOCAS EN >>>> VER MAS

    function abrirModal(titulo, descripcion, imagen, link) {
  document.getElementById("modalTitulo").textContent = titulo;
  document.getElementById("modalDescripcion").textContent = descripcion;
  document.getElementById("modalImagen").src = imagen;
  document.getElementById("modalLink").href = link || "#";
  document.getElementById("modalProyecto").classList.add("is-active");
}

function cerrarModal() {
  document.getElementById("modalProyecto").classList.remove("is-active");
}
