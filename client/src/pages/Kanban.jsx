import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import API from "../api/api";

const Kanban = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/tasks/1").then(res => setTasks(res.data));
  }, []);

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    const status = result.destination.droppableId;

    await API.put(`/tasks/${result.draggableId}`, { status });

    window.location.reload();
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {["Todo", "In Progress", "Done"].map(status => (
        <Droppable droppableId={status} key={status}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2>{status}</h2>

              {tasks
                .filter(t => t.status === status)
                .map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {task.title}
                      </div>
                    )}
                  </Draggable>
                ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

export default Kanban;