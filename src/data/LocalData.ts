/*
 * Copyright (C) 2012-2017  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// The type of the values stored in the data cache.
export interface LocalData {
    [name: string]: any;
}

// Functions that convert the string stored in localStorage to the data value that we will
// actually use, and vice versa. When deserialising, an exception is thrown if the data is
// invalid in any way. If no serialisation is specified, then JSON is used with no validation.
export const serialise_data: {readonly [name in keyof LocalData]?: (x: string) => LocalData[name]} = {
};

export const deserialise_data: {readonly [name in keyof LocalData]?: (x: LocalData[name]) => string} = {
};
