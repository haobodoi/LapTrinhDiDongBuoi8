import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CartItem } from "../types";
import { useDebounce } from "../hooks/useDebounce";
import { colors, formatPrice, radius } from "../theme";

interface Props {
  item: CartItem;
  onChangeQty: (bookId: number, quantity: number) => void;
  onRemove: (bookId: number) => void;
}

export function CartItemRow({ item, onChangeQty, onRemove }: Props) {
  const [qty, setQty] = useState(item.quantity);
  const debouncedQty = useDebounce(qty, 300);
  useEffect(() => { if (debouncedQty !== item.quantity) onChangeQty(item.bookId, debouncedQty); }, [debouncedQty]);
  useEffect(() => { setQty(item.quantity); }, [item.quantity]);
  const canDec = qty > 1;
  const canInc = qty < item.stock;
  return (
    <View style={styles.row}>
      <View style={[styles.cover, { backgroundColor: item.color }]}><Text style={styles.emoji}>{item.emoji}</Text></View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.price}>{formatPrice(item.price)}</Text>
        <View style={styles.controls}>
          <Pressable style={[styles.qtyBtn, !canDec && styles.disabled]} disabled={!canDec} onPress={() => setQty((q) => Math.max(1, q - 1))} accessibilityLabel="Giảm"><Text style={styles.qtyBtnText}>−</Text></Pressable>
          <Text style={styles.qty}>{qty}</Text>
          <Pressable style={[styles.qtyBtn, !canInc && styles.disabled]} disabled={!canInc} onPress={() => setQty((q) => Math.min(item.stock, q + 1))} accessibilityLabel="Tăng"><Text style={styles.qtyBtnText}>+</Text></Pressable>
          <Text style={styles.stock}>Còn {item.stock}</Text>
        </View>
      </View>
      <Pressable onPress={() => onRemove(item.bookId)} hitSlop={8} accessibilityLabel="Xóa khỏi giỏ"><Text style={styles.trash}>🗑️</Text></Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", backgroundColor: colors.card, borderRadius: radius.md, padding: 10, marginHorizontal: 12, marginVertical: 5, gap: 10 },
  cover: { width: 54, height: 72, borderRadius: radius.sm, alignItems: "center", justifyContent: "center" },
  emoji: { fontSize: 26 }, info: { flex: 1, gap: 3 },
  title: { fontWeight: "700", color: colors.text }, price: { color: colors.indigo, fontWeight: "800" },
  controls: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 4 },
  qtyBtn: { width: 26, height: 26, borderRadius: 13, backgroundColor: "#EDF1FA", alignItems: "center", justifyContent: "center" },
  qtyBtnText: { fontSize: 18, fontWeight: "800", color: colors.navy }, disabled: { opacity: 0.3 },
  qty: { minWidth: 13, textAlign: "center", fontWeight: "800", color: colors.navy }, stock: { color: colors.muted, fontSize: 11 },
  trash: { fontSize: 22 },
});
