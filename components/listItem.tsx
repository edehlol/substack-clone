import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import PostActions from './postActions';
import Link from 'next/link';

const ListItem = ({
  id,
  title,
  excerpt,
  author,
  date,
}: {
  id: string;
  title: string;
  excerpt?: string;
  author?: string;
  date?: string;
}) => {
  return (
    <li className="bg-hover p-4 cursor-pointer hover:bg-gray-100">
      <Link href={`/posts/${id}`}>
        <a className="">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-gray-500 mb-2">{excerpt ? excerpt : '...'}</p>
          <p className="text-sm mb-2">{author}</p>
          <PostActions date={date} />
        </a>
      </Link>
    </li>
  );
};

export default ListItem;
