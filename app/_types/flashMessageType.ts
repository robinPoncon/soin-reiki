export type MessageType = "success" | "error" | "warning" | "info";

export type Message = {
	id: number;
	text: string;
	type: MessageType;
	title: string;
	buttonText?: string;
	buttonAction?: () => void;
	visible: boolean;
};

export type FlashMessagesContextType = {
	messages: Message[];
	addMessage: (message: Omit<Message, "id">) => void;
	removeMessage: (index: number) => void;
};
