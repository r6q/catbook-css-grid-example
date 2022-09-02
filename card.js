const template = document.createElement('template');
template.innerHTML = `
<style>
.card {
  box-shadow: 0 2px 8px 0 lightgrey;
  text-align: center;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}
.banner-image {
  position: absolute;
  height: 10rem;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.profile-image {
  width: 8rem;
  height: 8rem;
  clip-path: circle(60px at center);
  margin-top: 4.5rem;
}

.description {
  margin: 1rem 2rem;
}

.follow-btn {
  width: 100%;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: dodgerblue;
  padding: 1rem;
  cursor: pointer;
}

</style>
<div class="card">
  <div class="banner-image"></div>
  <img src="" class="profile-image" alt="profile image">
  <h2 class="profile-name"></h2>
  <p class="description"></p>
  <button class="follow-btn">Follow</button>  
</div>
`;

class GridCard extends HTMLElement {
  following = false;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('.profile-image').src =
        this.getAttribute('image-url');
    this.shadowRoot.querySelector('.profile-name').innerText =
        this.getAttribute('profile-name');
    this.shadowRoot.querySelector('.banner-image').style['background-image'] =
        `url('${this.getAttribute('background-url')}')`;
    this.shadowRoot.querySelector('p').innerText =
        this.getAttribute('description');

    const button = this.shadowRoot.querySelector('.follow-btn');
    button.addEventListener('click', () => {
      this.following = !this.following;
      button.innerText = this.following ? '✔ Following' : 'Follow';
    });
  }
}

window.customElements.define('grid-card', GridCard);
