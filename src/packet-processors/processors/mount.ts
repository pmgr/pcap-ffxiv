import { BufferReader } from "../../buffer-reader";
import { Mount } from "../../definitions/Mount";

export function mount(reader: BufferReader): Mount {
	return {
		id: reader.nextUInt32(),
	};
}
