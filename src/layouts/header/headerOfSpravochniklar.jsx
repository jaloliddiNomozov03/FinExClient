import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu } from "antd";
import { TagsContext } from "../../components/Contexts/TagsContext";
const HeaderOfSpravochniklar = () => {
  const history = useHistory();
  const { tags, setTags, urlTags, setUrlTags } = useContext(TagsContext);
  const handleAddTag = (e) => {
    let tag = e.domEvent.target.innerText;
    console.log(window.location.href);
    e.domEvent.preventDefault();
    if(!tags.includes(tag)) {
      setUrlTags(urlTags.set(tag, history.location.pathname));
      setTags([...tags, tag]);
    }
  };

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
      <Menu.Item key="nav-1" onClick={(e) => handleAddTag(e)}>
        <Link to="/Spravochniklar/mahsulotTuri">mahsulotTuri</Link>
      </Menu.Item>
      <Menu.Item key="nav-2" onClick={e =>  handleAddTag(e)}>
        <Link to="/Spravochniklar/narxTuri">narxTuri</Link>
      </Menu.Item>
      <Menu.Item key="nav-3" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/nomenklatura">nomenklatura</Link>
      </Menu.Item>
      <Menu.Item key="nav-4" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/partiya">Partiya</Link>
      </Menu.Item>
      <Menu.Item key="nav-5" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/ulchovBirligi">ulchovBirligi</Link>
      </Menu.Item>
      <Menu.Item key="nav-6" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/bankXisobRaqamlari">bankXisobRaqamlari</Link>
      </Menu.Item>
      <Menu.Item key="nav-7" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/bulimlar">bulimlar</Link>
      </Menu.Item>
      <Menu.Item key="nav-8" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/valyutalar">valyutalar</Link>
      </Menu.Item>
      <Menu.Item key="nav-9" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/kassalar">kassalar</Link>
      </Menu.Item>
      <Menu.Item key="nav-10" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/omborlar">omborlar</Link>
      </Menu.Item>
      <Menu.Item key="nav-11" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/filial">filial</Link>
      </Menu.Item>
      <Menu.Item key="nav-12" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/firma">firma</Link>
      </Menu.Item>
      <Menu.Item key="nav-13" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/chiqimTuri">chiqimTuri</Link>
      </Menu.Item>
      <Menu.Item key="nav-14" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/bulim"> Bo'lim</Link>
      </Menu.Item>
      <Menu.Item key="nav-15" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/foydalanuvchi"> Foydalanuvchi</Link>
      </Menu.Item>
      <Menu.Item key="nav-16" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/kontragent">Kontragent</Link>
      </Menu.Item>
      <Menu.Item key="nav-17" onClick={e => handleAddTag(e)}>
        <Link to="/Spravochniklar/xodim">Xodimlar</Link>
      </Menu.Item>
    </Menu>
  );
};
export default HeaderOfSpravochniklar;
