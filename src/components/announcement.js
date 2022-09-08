function AnnouncementComponent() {
    
    const announcement = {
        author: "Memo Ero",
        date: "22.12.2021",
        title: "the title",
        content: "here lies an announcement"
    };


    return (
        <div className="announcement">
            <div className="author">{announcement.author}
            </div>
            <div className="date">{announcement.date}
            </div>
            <div className="atitle">{announcement.title}
            </div>
            <div className="announcementcontent">{announcement.content}</div>
        </div>
    );
}

export default AnnouncementComponent;