import RNFS from 'react-native-fs';
import {launchImageLibrary, MediaType} from 'react-native-image-picker';

import {decode} from 'base64-arraybuffer';
import { LocalMedia } from '../types/photos';


export async function SelectLocalMedia(
  limit: number,
  mediaType: MediaType,
): Promise<LocalMedia[] | undefined> {
  try {
    const media = await launchImageLibrary({
      mediaType: mediaType,
      selectionLimit: limit,
      includeBase64: true,
    });

    if (!media.assets) return;

    await Promise.all(
      media.assets.map(async a => {
        const base64 = a.base64 ?? (await RNFS.readFile(a.uri!, 'base64'));
        a.base64 = base64;
      }),
    );

    return media.assets?.map(a => ({
      buffer: decode(a.base64!),
      type: a.type!,
      uri: a.uri!,
      width: a.width ?? 0,
      height: a.height ?? 0,
    }));
  } catch (error) {
    console.log('SELECT PHOTO ERROR', error);
  }
}
