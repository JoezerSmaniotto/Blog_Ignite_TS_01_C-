import { useState } from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';
import { Avatar } from './Avatar';

interface CommentProps {
    content: string,
    onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){

    const [likeCount,setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state)=> state+1);
       
    }
   
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/42808798?v=4" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Joezer Smaniotto</strong>
                            <time title="12 de Janeiro de 2023 08:12" dateTime="2023-01-12 08:12">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir  <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        
        </div>
    )   
}