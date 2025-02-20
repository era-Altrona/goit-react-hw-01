export default function Profile({ name, tag, location, image, stats }) {
  const tagWithotAt = tag.replace("@", "");
  return (
    <div className="containerProfile">
      <div className="generalProfile">
        <img className="avatar" src={image} alt="User avatar" />
        <p className="nameProfile">{name}</p>
        <p className="tagProfile">{tagWithotAt}</p>
        <p className="locationProfile">{location}</p>
      </div>

      <ul className="profileList">
        <li className="itemList">
          <span className="statsProfile">Followers</span>
          <span className="numberElementsProfile">{stats.followers}</span>
        </li>

        <li className="itemList">
          <span className="statsProfile">Views</span>
          <span className="numberElementsProfile">{stats.views}</span>
        </li>

        <li className="itemList">
          <span className="statsProfile">Likes</span>
          <span className="numberElementsProfile">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
