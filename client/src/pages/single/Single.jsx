import Menu from "../../components/Menu";
import "./single.scss";
import { Link } from "react-router-dom";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/9792173/pexels-photo-9792173.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/27832576/pexels-photo-27832576/free-photo-of-woman-squatting-with-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <div className="info">
            <span>Jenny</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <div className="btn">
              <Link to={"/write?edit=2"}>
                <img src="/edit.png" alt="" />
              </Link>
            </div>
            <div className="btn">
              <img src="/delete.png" alt="" />
            </div>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo
          optio ea saepe. Culpa voluptates voluptate eius, fugit, eligendi optio
          numquam facere inventore accusamus nesciunt dicta? Molestias odit
          possimus tenetur. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. <br /> <br /> Soluta dolorem quis delectus itaque adipisci autem
          vitae fuga, dolores, doloremque veritatis exercitationem inventore
          repellendus consectetur quod at illo harum, placeat architecto.
          Voluptatum cupiditate, impedit fugiat itaque libero voluptates
          consequatur ad, neque animi labore exercitationem eum inventore
          ducimus eius. Laborum consequuntur labore, harum delectus corporis
          placeat aliquid, fuga eaque pariatur quas ea.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          suscipit tempora adipisci tenetur voluptatem, cupiditate sed numquam
          architecto saepe accusamus quaerat repellendus aperiam dolor! Totam
          asperiores recusandae laudantium modi sed. Facere expedita totam
          repellendus quod voluptates hic quis quae cupiditate provident,
          similique quidem accusantium quia? Explicabo suscipit unde
          necessitatibus maxime beatae! Atque inventore nostrum non praesentium
          quod placeat tempora id? Cum, expedita fuga quod corrupti ex amet?
          Tenetur impedit ea saepe cumque praesentium!
          <br />
          <br />
          Natus veritatis, neque temporibus necessitatibus saepe explicabo,
          dolorem incidunt possimus deserunt ad repudiandae error expedita
          mollitia officia. Hic itaque, adipisci fuga modi consequuntur
          laudantium illum ipsa dolores sequi ipsam quaerat deleniti qui,
          tempora enim, voluptate necessitatibus magnam. Magni aspernatur
          fugiat, consequuntur quibusdam nostrum numquam quam ipsum nisi.
          Corrupti id nam tempora repudiandae. Sit sequi voluptatem,
          consequatur, dolorum eaque saepe pariatur, laudantium laborum error
          beatae corrupti officiis consequuntur ipsam nesciunt ut voluptate
          maiores molestiae? Earum aliquid magnam iusto.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
